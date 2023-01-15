import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { CourseType } from "../../../../features/courses/courseTypes/CourseType";
import Avatar from "../../../elements/Avatar";
import SkeletonItem from "../../../elements/SkeletonItem";
interface Props {
  course: CourseType;
  Updater?: any;
  Deleter?: any;
}
export default function CourseItemComp({ course, Updater, Deleter }: Props) {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(router.pathname + "/" + course.id);
  };
  return (
    <div
      onClick={onClickHandler}
      className=" anim-mount  ring-2 flex-col overflow-hidden rounded-xl ring-rose-200d ring-slate-600 bg-pink-50d bg-rose-50d bg-[#fff6f8]  flex gap-2d max-w-[300px]d h-full w-full cursor-pointer hover:ring-rose-400 "
    >
      <div className="h-[20%]d max-h-[160px] min-h-[150px] h-full bg-pink-100">
        {/* <img
          src={course.imageUrl}
          alt=""
          className="bg-red-200 w-full h-full  "
        /> */}
        {/* <Image src={}/> */}
      </div>
      <div className="flex flex-col gap-1 ring-1d p-2 flex-1">
        <h3 className="font-semibold leading-5 flex-1">{course?.title}</h3>

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

        <div className="flex gap-2 items-center pt-1">
          <Avatar user={course?.creator} />
          <small>{course?.creator?.name}</small>
        </div>
      </div>
      <div className="flex gap-2">
        {Updater && Updater}
        {Deleter && Deleter}
      </div>
    </div>
  );
}

export function CourseItemLoader() {
  return (
    <div className="bg-[#ffeaed] animate-pulse p-6d min-h-[290px] rounded-2xl ring-2 ring-rose-200 flex flex-col gap-2 overflow-hidden">
      <div className="bg-[#e9d3d6]d bg-rose-200 flex-1 max-h-[150px] "></div>
      <SkeletonItem />
    </div>
  );
}
