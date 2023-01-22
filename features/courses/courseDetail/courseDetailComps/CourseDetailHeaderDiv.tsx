import React from "react";

export default function CourseDetailHeaderDiv({
  className,
  backClassName,
  children,
  anim = true,
  ...props
}: any) {
  return (
    <div
      className={
        " relative flex flex-col gap-3 justify-center pt-[90px] pb-[20px]  bg-rose-300  p-3   " +
        className
      }
    >
      {children}
      <div
        className={
          "bg-primary-bgd ring-1d bg-[#fbe0e5] p-3 absolute bottom-0  left-0 w-full  h-[110px] rounded-tl-[100%] rounded-tr-[100%] flex  " +
          backClassName +
          (anim && " course-detail-bottom ")
        }
      ></div>
    </div>
  );
}
