import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";
import BtnLarge from "../../../../components/elements/BtnLarge";
import LayoutMain from "../../../../components/layout/LayoutMain";
import LearnLessons from "../../../learn/learnLessons/LearnLessons";
import LearnType from "../../../learn/learnTypes/LearnType";
import LearnVideo from "../../../learn/learnVideo/LearnVideo";
import useCoursePreLesson from "../../courseHooks/useCoursePreLesson";
import { CourseType } from "../../courseTypes/CourseType";

interface Props {
  course: CourseType;
  className?: string;
  anim?: boolean;
}
export default function CourseStarter({ course, className }: Props) {
  const { prelesson } = useCoursePreLesson(course?.id);
  const [test, setTest] = useState<LearnType | undefined>(undefined);
  const qClient = useQueryClient();

  const onStartCourse = () => {
    if (prelesson?.data) {
      const createdLearnData: LearnType = {
        course: {
          title: course?.title as string,
          modules: [
            {
              title: "",
              lessons: [{ ...prelesson?.data }],
            },
          ],
        },
        courseId: course.id as string,
        currentLessonId: prelesson.data?.id,
        done: true,
        userId: "",
      };
      setTest(createdLearnData);
      qClient.setQueriesData(["learn", course?.id], () => {
        return createdLearnData;
      });
    }
  };

  if (test)
    return (
      <div
        className={" fixed bg-red-900 top-0 left-0 w-full h-full " + className}
      >
        <LayoutMain
          className="bg-white"
          headerClass=" bg-white"
          Child1={
            <div>
              <p>{test?.course?.title}</p>
            </div>
          }
        >
          <div className="flex">
            <div className="flex flex-col flex-1 min-h-[1200px]">
              <LearnVideo courseId={course.id} />
            </div>
            <div className="max-w-[25%] sticky top-0 max-h-screen">
              <LearnLessons learn={test} courseId={course.id as string} />
            </div>
          </div>
        </LayoutMain>
      </div>
    );

  return (
    <Link
      onClick={onStartCourse}
      href={{
        pathname: `/learn/${course?.id}`,
        query: {
          id: prelesson.data?.id,
          title: course?.title,
          videoUrl: prelesson.data?.videoUrl,
          description: prelesson.data?.description,
          preview: prelesson.data?.preview,
        },
      }}
    >
      <BtnLarge
        //   onClick={onStartCourse}
        className="  bg-white bg-opacity-70 ring-slate-800 "
      >
        Start Course
      </BtnLarge>
    </Link>
  );
}
