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
    <div className=" p-1 px-6 bg-slate-800 flex gap-2 justify-between ">
      <div className="flex items-center gap-3">
        <p>{lesson.title}</p>
        <p>{lesson.description}</p>
        <small>{lesson.id}</small>
      </div>
      {Editor && Editor}
      {Deleter && Deleter}
      <Link href={"/my-lesson/" + lesson.id}>view</Link>
    </div>
  );
}
