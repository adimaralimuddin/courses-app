import React, { ReactNode } from "react";
import { CourseType } from "../../../../features/courses/courseTypes/CourseType";
interface Props {
  courses: CourseType[] | undefined;
  Lists?: any;
  children: ReactNode;
}
export default function CourseQueryComp({ courses, Lists, children }: Props) {
  return (
    <div className="flex flex-col   ">
      <div className="p-2">search query</div>
      <div className="flex-1 flex ">
        <div className="bg-red-100 p-2">side bar query</div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
