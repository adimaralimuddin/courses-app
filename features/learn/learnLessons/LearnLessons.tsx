import { useRouter } from "next/router";
import React from "react";
import useLearn from "../learnHooks/useLearn";
import LearnLessonItem from "../learnItems/LearnLessonItem";
import LearnType from "../learnTypes/LearnType";
import LearnLessonDiv from "./LearnLessonDiv";
import LearnModuleItem from "./LearnModuleItem";
interface Props {
  learn: LearnType | undefined;
  courseId: string;
}
export default function LearnLessons({ learn, courseId }: Props) {
  const { lesson: currentLesson, selectLesson } = useLearn(courseId);

  return (
    <LearnLessonDiv>
      {learn?.course?.modules?.map((module) => (
        <LearnModuleItem module={module} key={module.id}>
          {module?.lessons?.map((lesson, ind) => (
            <LearnLessonItem
              onSelect={selectLesson}
              lesson={lesson}
              currentLesson={currentLesson}
              dones={learn?.doneLesson}
              ind={ind + 1}
              key={lesson.id}
            />
          ))}
        </LearnModuleItem>
      ))}
    </LearnLessonDiv>
  );
}
