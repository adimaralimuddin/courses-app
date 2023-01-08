import React from "react";
import LessonListsDivComp from "../../../components/featureComps/lessonComps/lessonListsComps/LessonListsDivComp";
import LessonAdder from "../lessonEditor/LessonAdder";
import useLessonModuleLesson from "../lessonHooks/useLessonModuleLessons";
import LessonItemEditable from "../lessonItem/LessonItemEditable";
interface Props {
  moduleId: string | undefined;
}
export default function LessonListsEditable({ moduleId }: Props) {
  const { data } = useLessonModuleLesson(moduleId);

  return (
    <LessonListsDivComp Adder={<LessonAdder moduleId={moduleId} />}>
      {data?.map((lesson) => (
        <LessonItemEditable lesson={lesson} key={lesson.id} />
      ))}
    </LessonListsDivComp>
  );
}
