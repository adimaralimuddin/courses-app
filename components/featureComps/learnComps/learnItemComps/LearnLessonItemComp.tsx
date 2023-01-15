import React from "react";
import LessonType from "../../../../features/lessons/LessonsTypes/LessonType";
interface Props {
  lesson: LessonType;
  currentLesson: LessonType | null;
  dones: string[] | undefined;
  ind?: number;
  onSelect: (lesson: LessonType) => any;
}
export default function LearnLessonItemComp({
  lesson,
  currentLesson,
  dones,
  onSelect,
  ind,
}: Props) {
  const isActive = (a: string | boolean = true, b: string | boolean = false) =>
    currentLesson?.id == lesson.id ? a : b;

  const isDone = (a: string | boolean = true, b: string | boolean = false) =>
    dones?.find((id) => id == lesson?.id) ? a : b;

  const onSelectHandler = () => {
    onSelect(lesson);
  };
  return (
    <div
      onClick={onSelectHandler}
      className={
        "p-2 px-3 cursor-pointer flex gap-2 " +
        isActive("bg-rose-200", "bg-white")
      }
      key={lesson.id}
    >
      {isDone() && <div>✔</div>}
      <small>{lesson?.id}</small>
      {ind && <small>{ind}</small>}
      <p className={"" + isActive("text-slate-900 text-sm font-semibold", "")}>
        {" "}
        {lesson?.title?.length > 100
          ? lesson?.title?.slice(0, 100) + "..."
          : lesson?.title}
      </p>
    </div>
  );
}
