import React from "react";
import { CourseItemCompsProps } from "./CourseItem";

export default function CourseItemImage({
  course,
  className,
}: CourseItemCompsProps) {
  return (
    <div
      className={
        "h-[20%]d max-h-[160px] min-h-[150px] h-full bg-blue-700 bg-opacity-5 " +
        className
      }
    >
      {!course?.imageUrl && (
        <img
          src={course.imageUrl}
          alt=""
          className="bg-red-200d w-full h-full  "
        />
      )}
      {/* <Image src={}/> */}
    </div>
  );
}
