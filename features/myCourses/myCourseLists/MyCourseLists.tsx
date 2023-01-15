import React from "react";
import CourseListsDivComp from "../../../components/featureComps/courseComps/courseSubComs/CourseListsDivComp";
import { CourseType } from "../../courses/courseTypes/CourseType";
import MyCourseAdder from "../myCourseEditor/MyCourseAdder";
import MyCourseItem from "../myCourseItems/MycourseItems";
interface Props {
  courses: CourseType[] | undefined;
}
export default function MyCourseLists({ courses }: Props) {
  return (
    <div className="p-3">
      <div className="px-2 pb-2">
        <MyCourseAdder />
      </div>
      <CourseListsDivComp>
        {courses?.map((course) => (
          <MyCourseItem course={course} key={course.id} />
        ))}
      </CourseListsDivComp>
    </div>
  );
}
