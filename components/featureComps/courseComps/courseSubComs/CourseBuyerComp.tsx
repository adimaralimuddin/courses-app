import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React from "react";
import { CourseType } from "../../../../features/courses/courseTypes/CourseType";

interface Props {
  onBuy: Function;
  course: CourseType | undefined;
}
export default function CourseBuyerComp({ onBuy, course }: Props) {
  const { user } = useUser();

  const isSub = () =>
    course?.creatorId == user?.sub
      ? true
      : course?.students?.[0]?.id == user?.sub
      ? true
      : false;

  const onBuyHandler = () => {
    onBuy(course?.id);
  };

  console.log("issub", isSub());
  return (
    <div className="flex gap-2 items-center text-center">
      {isSub() ? (
        <button className="ring-[3pxd] ring-slate-900    bg-indigo-400d bg-black text-white font-bold text-[1.4rem] rounded-full p-[5px] px-6">
          {course?.id && (
            <Link href={"/learn/" + course?.id}>Start Course</Link>
          )}
        </button>
      ) : (
        <button
          onClick={onBuyHandler}
          className="ring-[3px] ring-slate-900 ring-whited   bg-rose-400 text-white font-bold text-[1.4rem] rounded-full p-[5px] px-6"
        >
          ${course?.price} Buy Course
        </button>
      )}
    </div>
  );
}
