import React from "react";
import CourseQueryComp from "../../../components/featureComps/courseComps/courseQueryComps/CourseQueryComp";
import useMyCourses from "../myCourseHooks/useMyCourses";
import MyCourseLists from "./MyCourseLists";

export default function MyCoursesPage() {
  const { data } = useMyCourses();

  return (
    <div>
      <CourseQueryComp courses={data} Lists={MyCourseLists}>
        <MyCourseLists courses={data} />
      </CourseQueryComp>
    </div>
  );
}
