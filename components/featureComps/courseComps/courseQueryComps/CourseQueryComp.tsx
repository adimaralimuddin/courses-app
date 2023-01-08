import React, { FC, ReactNode } from "react";
import { CourseType } from "../../../../features/courses/courseTypes/CourseType";
interface Props {
  courses: CourseType[] | undefined;
  Lists?: any;
  children: any;
}
export default function CourseQueryComp({ courses, Lists, children }: Props) {
  return <div>{children}</div>;
}
