import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
// import { isArray } from "nexus/dist/utils";
import LessonType from "../../lessons/LessonsTypes/LessonType";
import learnApiLearnInit from "../learnApis/learnApiLearnInit";
import learnApiNextLern from "../learnApis/learnApiNextLearn";
import LearnState from "../learnStates/LearnState";
import LearnType from "../learnTypes/LearnType";

export default function useLearn(courseId: string | undefined) {
  const { set, ...states } = LearnState((state) => state);
  const { query } = useRouter();
  const c = useQueryClient();

  const learnQuery = useQuery<LearnType>(
    ["learn", courseId],
    () => learnApiLearnInit(courseId),
    {
      initialData: () => {
        const y: LearnType = {
          course: {
            title: "",
            modules: [
              {
                title: "",
                lessons: [
                  {
                    id: String(query?.id),
                    title: String(query?.title),
                    description: String(query?.description),
                    videoUrl: String(query?.videoUrl),
                  },
                ],
              },
            ],
          },
          courseId: String(courseId),
          currentLessonId: String(courseId),
          done: true,
          userId: "",
        };
        return y;
      },
      onSuccess: (learnData) => {
        const lessons = learnData?.course?.modules
          ?.map((module) => module?.lessons?.map((lesson) => lesson))
          ?.flat();
        let lesson: LessonType | undefined = undefined;
        if (learnData?.currentLessonId) {
          lesson = lessons?.find((l) => l?.id == learnData?.currentLessonId);
        } else {
          lesson = lessons?.[0];
        }
        set({ lesson, lessons });
      },
    }
  );

  const next = useMutation(learnApiNextLern, {
    onSuccess: (d) => {
      // console.log("success next", d.currentLessonId);
    },
  });

  const nextLesson = () => {
    const nextLesson =
      states.lessons[states.lessons.indexOf(states.lesson as LessonType) + 1] ||
      states.lessons?.[0];

    if (nextLesson?.id) {
      next.mutate({
        courseId,
        currentLessonId: nextLesson.id,
      });
      set({ lesson: nextLesson });
    }
  };

  const selectLesson = (lesson: LessonType) => {
    if (lesson?.id) {
      next.mutate({
        courseId,
        currentLessonId: lesson.id,
      });
      set({ lesson });
    }
  };

  return { ...learnQuery, ...states, selectLesson, nextLesson };
}
