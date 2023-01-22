import React from "react";
import { CourseItemCompsProps } from "./CourseItem";

export default function CourseItemContent({
  course,
  className,
}: CourseItemCompsProps) {
  return (
    <div className={"flex flex-col gap-1 ring-1d p-2 flex-1 " + className}>
      <h3 className="font-semibold leading-5 flex-1 max-h-[50px] overflow-hidden">
        {course?.title}
      </h3>

      {course?.free ? (
        <div className="flex gap-2">
          <h3 className="font-bold text-primary-main text-[1.1rem]">$0</h3>
          <p className="text-yellow-500  font-bold">Free Course</p>
        </div>
      ) : (
        <div className="flex gap-2">
          <h3 className="font-bold text-primary-main text-[1.1rem]">
            ${course?.price}
          </h3>

          <p className="line-through">-{course?.discount}</p>
        </div>
      )}
      <div className="flex justify-betweend items-center gap-2 ">
        <small className="text-slate-500">⭐({course?.ratings}) </small>
        <span className="text-slate-400 text-sm">|</span>
        <small className="text-slate-500">{course?.duration}dy </small>
        <span className="text-slate-400 text-sm">|</span>
        <small className="text-slate-500"> {course?.language} </small>
        <span className="text-slate-400 text-sm">|</span>
        <small className="text-slate-500"> {"all level"}</small>
      </div>
    </div>
  );
}
