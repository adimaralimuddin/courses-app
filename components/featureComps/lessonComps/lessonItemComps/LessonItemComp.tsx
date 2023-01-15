import Link from "next/link";
import React from "react";
import LessonType from "../../../../features/lessons/LessonsTypes/LessonType";

interface Props {
  lesson: LessonType;
  Editor?: any;
  Deleter?: any;
}
export default function LessonItemComp({ lesson, Editor, Deleter }: Props) {
  return (
    <div className=" p-2 px-6 flex gap-2 justify-between border-t border-red-200d border-slate-300 min-h-[45px] ">
      <div className="flex flex-col gap-3d items-centerd flex-1">
        <p className="text-slate-700 text-[1rem]d font-[500]">
          {lesson?.title}
        </p>
        {/* <small>{lesson?.description?.slice(0, 50)} </small> */}
      </div>
      <div className="flex gap-3">
        {Editor && Editor}
        {Deleter && Deleter}
        {/* <Link href={"/my-lesson/" + lesson.id}>view</Link> */}
      </div>
    </div>
  );
}
