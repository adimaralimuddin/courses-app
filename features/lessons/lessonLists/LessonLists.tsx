import React from "react";
import LessonItemComp from "../../../components/featureComps/lessonComps/lessonItemComps/LessonItemComp";
import LessonListsDivComp from "../../../components/featureComps/lessonComps/lessonListsComps/LessonListsDivComp";
import useLessonModuleLesson from "../lessonHooks/useLessonModuleLessons";
interface Props {
  moduleId: string | undefined;
}
export default function LessonLists({ moduleId }: Props) {
  const { data } = useLessonModuleLesson(moduleId);

  return (
    <LessonListsDivComp>
      {data?.map((lesson) => (
        <LessonItemComp lesson={lesson} key={lesson.id} />
      ))}
    </LessonListsDivComp>
  );
}
