import React from "react";
import { CourseType } from "../../../../features/courses/courseTypes/CourseType";
interface Props {
  course: CourseType | undefined;
  Updater?: any;
  Deleter?: any;
}
export default function CourseDetailComp({ course, Updater, Deleter }: Props) {
  return (
    <div className="p-3 bg-green-700 flex gap-3 justify-between">
      <div>
        <small>{course?.id}</small>
        <p>{course?.title}</p>
        <p>{course?.description}</p>
      </div>
      <div>{Updater && Updater}</div>
      <div>{Deleter && Deleter}</div>
    </div>
  );
}
