import React from "react";
import { CourseType } from "../../../../features/courses/courseTypes/CourseType";
import CourseItemComp from "../courseItemComps/CourseItemComp";
import CourseListsDivComp from "../courseSubComs/CourseListsDivComp";

interface Props {
  courses: CourseType[] | undefined;
  Item?: any;
}
export default function CourseListsComp({ courses, Item }: Props) {
  return (
    <CourseListsDivComp>
      i am here
      {!Item &&
        courses?.map((course) => (
          <CourseItemComp course={course} key={course.id} />
        ))}
      {Item &&
        courses?.map((course) => <Item course={course} key={course.id} />)}
    </CourseListsDivComp>
  );
}
