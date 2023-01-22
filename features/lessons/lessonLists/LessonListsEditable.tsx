import React from "react";
import LessonAdder from "../lessonEditor/LessonAdder";
import useLessonModuleLesson from "../lessonHooks/useLessonModuleLessons";
import LessonItemEditable from "./LessonItemEditable";
import LessonListDiv from "./LessonListDiv";
interface Props {
  moduleId: string | undefined;
}
export default function LessonListsEditable({ moduleId }: Props) {
  const { data } = useLessonModuleLesson(moduleId);

  return (
    <LessonListDiv Adder={<LessonAdder moduleId={moduleId} />}>
      {data?.map((lesson) => (
        <div className="hover:bg-slate-100 " key={lesson.id}>
          <LessonItemEditable moduleId={moduleId} lesson={lesson} />
        </div>
      ))}
    </LessonListDiv>
  );
}
