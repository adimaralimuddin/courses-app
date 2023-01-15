import React from "react";
import LearnLessonItemComp from "../../../components/featureComps/learnComps/learnItemComps/LearnLessonItemComp";
import LearnLessonDivComp from "../../../components/featureComps/learnComps/learnMainComps/LearnLessonDivComp";
import LearnModuleItemComp from "../../../components/featureComps/learnComps/learnMainComps/LearnModuleItemComp";
import useLearn from "../learnHooks/useLearn";
import LearnType from "../learnTypes/LearnType";
interface Props {
  learn: LearnType | undefined;
  courseId: string;
}
export default function LearnLessons({ learn, courseId }: Props) {
  const { lesson: currentLesson, selectLesson } = useLearn(courseId);
  return (
    <LearnLessonDivComp>
      {learn?.course?.modules?.map((module) => (
        <LearnModuleItemComp module={module} key={module.id}>
          {module?.lessons?.map((lesson, ind) => (
            <LearnLessonItemComp
              onSelect={selectLesson}
              lesson={lesson}
              currentLesson={currentLesson}
              dones={learn?.doneLesson}
              ind={ind + 1}
              key={lesson.id}
            />
          ))}
        </LearnModuleItemComp>
      ))}
    </LearnLessonDivComp>
  );
}
