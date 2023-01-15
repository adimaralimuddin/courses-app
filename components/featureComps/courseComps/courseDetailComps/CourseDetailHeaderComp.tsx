import React from "react";
import CourseBuyerComp from "../courseSubComs/CourseBuyerComp";

export default function CourseDetailHeaderComp({ course, onBuy }: any) {
  return (
    <div className="ring-2 ring-slate-600 rounded-xl overflow-hidden flex gap-3 max-w-5xl mx-auto w-full z-10 bg-white h-[250px] shadow-lg">
      <div className="w-[30%] bg-red-400">
        <img
          src={
            "https://i.ytimg.com/an_webp/w6b1xnCcNoI/mqdefault_6s.webp?du=3000&sqp=COyngJ4G&rs=AOn4CLAtqZ0r6o-9V7JTT4JBM3wnctxEYA"
          }
          alt=""
          className="w-full h-full ring-0"
        />
      </div>

      <div className="flex-1 p-2 max-w-2xl flex flex-col justify-center">
        <h1 className="font-bold ">{course?.title}</h1>
        <h2 className="text-[1.1rem]">
          {course?.description?.length && course?.description?.length > 150
            ? course?.description?.slice(0, 150) + "..."
            : course?.description}
        </h2>
        <div className="py-2">
          <CourseBuyerComp onBuy={onBuy} course={course} />
        </div>
      </div>
      {/* <div>
        <div>{Updater && Updater}</div>
      </div> */}
    </div>
  );
}
