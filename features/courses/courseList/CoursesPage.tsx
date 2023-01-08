import React from "react";
import CourseItemComp from "../../../components/featureComps/courseComps/courseItemComps/CourseItemComp";
import CourseQueryComp from "../../../components/featureComps/courseComps/courseQueryComps/CourseQueryComp";
import CourseListsDivComp from "../../../components/featureComps/courseComps/courseSubComs/CourseListsDivComp";
import useCourses from "../courseHooks/useCourses";

export default function CoursesPage() {
  const { data } = useCourses();

  return (
    <div>
      <CourseQueryComp courses={data}>
        <CourseListsDivComp>
          {data?.map((course) => (
            <CourseItemComp course={course} key={course.id} />
          ))}
        </CourseListsDivComp>
      </CourseQueryComp>
    </div>
  );
}
