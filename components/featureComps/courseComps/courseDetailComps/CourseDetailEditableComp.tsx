import React from "react";
import { CourseType } from "../../../../features/courses/courseTypes/CourseType";
import CourseDetailCom from "./CourseDetailComp";
interface Props {
  course: CourseType | undefined;
}
export default function CourseDetailEditableComp({ course }: Props) {
  return (
    <div className="p-1 bg-pink-800">
      <small>editable </small>
      <CourseDetailCom course={course} />
    </div>
  );
}
