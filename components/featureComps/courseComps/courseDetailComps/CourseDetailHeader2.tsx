import React from "react";
import CourseBuyerComp from "../courseSubComs/CourseBuyerComp";

export default function CourseDetailHeader2({ course, onBuy }: any) {
  return (
    <div className="w-full max-w-5xl mx-auto pb-[70px]d flex gap-[3%] z-20">
      <img
        src={
          "https://i.ytimg.com/an_webp/w6b1xnCcNoI/mqdefault_6s.webp?du=3000&sqp=COyngJ4G&rs=AOn4CLAtqZ0r6o-9V7JTT4JBM3wnctxEYA"
        }
        alt=""
        className="w-fulld h-fulld ring-0 div-stroke aspect-auto max-h-[230px]"
      />
      <div className="flex flex-col gap-3">
        <h1 className="stroke font-bold text-[3.3rem] leading-[3.3rem] text-whited text-slate-800 drop-shadow-md ">
          {course?.title}
        </h1>
        <div className="pt-6 ring-1d">
          <CourseBuyerComp onBuy={onBuy} course={course} />
        </div>
        <h3 className="text-[1.2rem] leading-6 py-2 font-semibold text-slate-700 max-w-lg dring-1">
          {course?.description?.slice(0, 100)} ...
        </h3>
      </div>
    </div>
  );
}
