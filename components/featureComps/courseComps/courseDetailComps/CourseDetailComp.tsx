import Image from "next/image";
import React from "react";
import { CourseType } from "../../../../features/courses/courseTypes/CourseType";
// import CourseBuyerComp from "../courseSubComs/CourseBuyerComp";
import CourseDetailHeader2 from "./CourseDetailHeader2";
// import CourseDetailHeaderComp from "./CourseDetailHeaderComp";
interface Props {
  course: CourseType | undefined;
  Updater?: any;
  Deleter?: any;
  onBuy: Function;
  className?: string;
  backClassName?: string;
}
export default function CourseDetailComp({
  course,
  onBuy,
  className,
  backClassName,
}: Props) {
  return (
    <div
      className={
        " relative flex flex-col gap-3 justify-center pt-[90px] pb-[20px] min-h-[300px]d bg-rose-300 " +
        className
      }
    >
      <CourseDetailHeader2 course={course} onBuy={onBuy} />
      <div
        className={
          "bg-primary-bgd bg-[#fbe0e5] p-3 absolute bottom-0 left-0 w-full h-[25%] rounded-tl-[100%] rounded-tr-[100%] ring-1d " +
          backClassName
        }
      ></div>
    </div>
  );
}
