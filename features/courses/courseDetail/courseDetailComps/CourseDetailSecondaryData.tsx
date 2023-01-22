import React from "react";
import { CourseType } from "../../../../features/courses/courseTypes/CourseType";

export default function CourseDetailSecondaryData({
  course,
}: {
  course: CourseType | undefined;
}) {
  return (
    <div className="flex flex-col gap-1 px-2 ring-2d">
      <div className="text-[1.3rem] flex gap-6 font-semibold justify-betweend">
        <small className="text-teal-700 font-semibold">
          {course?._count?.students || 0} students
        </small>
        <small className="text-slate-700">
          4.8⭐⭐⭐ ( {course?._count?.ratings || 0} ratings )
        </small>
      </div>
      <div className="text-[1.15rem] text-red-700 flex gap-6 font-semibold justify-betweend">
        <small className="text-slate-700">🎫{course?.duration} days</small>
        <small className="text-slate-700">🏆{course?.language?.flat()}</small>
        <small className="text-slate-700 ">
          🏅 last updated {"( "}
          {new Date(String(course?.createdAt)).toDateString()}
          {" )"}
        </small>
      </div>
    </div>
  );
}
