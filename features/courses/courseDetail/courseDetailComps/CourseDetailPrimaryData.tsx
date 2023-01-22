import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { CourseType } from "../../courseTypes/CourseType";

export type CoursePrimaryDataType = {
  course: CourseType | undefined;
  children: ReactNode;
  className?: string;
  anim?: boolean;
};
export default function CourseDetailPrimaryData({
  course,
  children,
  className,
  anim = true,
}: CoursePrimaryDataType) {
  const { query } = useRouter();
  return (
    <div
      className={
        "w-full max-w-5xl ring-1d mx-auto pb-[70px]d flex gap-8 flex-wrap z-20  " +
        className
      }
    >
      <img
        src={course?.imageUrl || String(query?.imageUrl)}
        alt=""
        className={
          "w-[280px] h-[280px] rounded-2xld bg-rose-200 rounded-2xl div-stroke aspect-auto max-h-[230px] " +
          (anim && " anim-slideright ")
        }
      />
      <div className="flex flex-1 delay-200 justify-end flex-col gap-3 ">
        <h1
          className={
            "  stroke flex-1d  font-bold text-[3.3rem] leading-[3.3rem] text-whited text-slate-800 drop-shadow-md  " +
            (anim && " anim-slideleft  ")
          }
        >
          {course?.title || query?.title}
        </h1>

        <h3
          className={
            "text-[1.2rem]  px-2 leading-6 py-2 font-semibold text-slate-700 max-w-lg " +
            (anim && " anim-slideleft delay-200 opacity-0 ")
          }
        >
          {course?.description
            ? course?.description?.slice(0, 100) + "..."
            : query?.description?.slice(0, 100) + "..."}
        </h3>

        {children && children}
      </div>
    </div>
  );
}
