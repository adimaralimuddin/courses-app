import { useQuery } from "@tanstack/react-query";
import lessonApiGetModuleLessons from "../lessonApi/lessonApiGetModuleLessons";
import LessonType from "../LessonsTypes/LessonType";

export default function useLessonModuleLesson(moduleId: string | undefined) {
  const query = useQuery<LessonType[]>(["modulelessons", moduleId], () =>
    lessonApiGetModuleLessons(moduleId)
  );

  return {
    ...query,
  };
}
