import React from "react";
import useLessonModuleLesson from "../lessonHooks/useLessonModuleLessons";
import LessonItem from "./LessonItem";
import LessonListDiv from "./LessonListDiv";
interface Props {
  moduleId: string | undefined;
}
export default function LessonLists({ moduleId }: Props) {
  const { data } = useLessonModuleLesson(moduleId);

  return (
    <LessonListDiv>
      {data?.map((lesson) => (
        <LessonItem lesson={lesson} key={lesson.id} />
      ))}
    </LessonListDiv>
  );
}
