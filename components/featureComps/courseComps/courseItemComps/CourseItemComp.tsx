import Link from "next/link";
import React from "react";
import { CourseType } from "../../../../features/courses/courseTypes/CourseType";
interface Props {
  course: CourseType;
  detailPath?: string;
  Updater?: any;
  Deleter?: any;
}
export default function CourseItemComp({
  course,
  detailPath = "/courses",
  Updater,
  Deleter,
}: Props) {
  return (
    <div className="ring-1 p-3 flex gap-2">
      <div>
        <p>{course.title}</p>
        <small>{course.id}</small>
        <p>{course.description}</p>
        <Link href={detailPath + "/" + course.id}>view</Link>
      </div>
      <div className="flex gap-2">
        {Updater && Updater}
        {Deleter && Deleter}
      </div>
    </div>
  );
}
