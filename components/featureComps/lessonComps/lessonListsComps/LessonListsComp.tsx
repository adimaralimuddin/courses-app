import React from "react";
import LessonType from "../../../../features/lessons/LessonsTypes/LessonType";
import LessonItemComp from "../lessonItemComps/LessonItemComp";

interface Props {
  lessons: LessonType[] | undefined;
}
export default function LessonListsComp({ lessons }: Props) {
  return (
    <div className="flex flex-col  bg-slate-700 gap-[1px] ">
      {lessons?.map((lesson) => (
        <LessonItemComp lesson={lesson} key={lesson.id} />
      ))}
    </div>
  );
}
