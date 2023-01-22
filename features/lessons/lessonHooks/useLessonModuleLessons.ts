import { useQuery } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import LessonType from "../LessonsTypes/LessonType";

export default function useLessonModuleLesson(moduleId: string | undefined) {
  const lessonMudoleQuery = useQuery<LessonType[]>(
    ["modulelessons", moduleId],
    () => lessonModuleQueryFn(moduleId)
  );

  return {
    ...lessonMudoleQuery,
  };
}

async function lessonModuleQueryFn(
  moduleId: string | undefined
): Promise<LessonType[]> {
  const queryString = `query ModuleLessons($moduleId: String!) {
  moduleLessons(moduleId: $moduleId) {
    id
    index
    title
    videoUrl
    description
    moduleId
  }
}`;
  return await gqlFetch(queryString, { moduleId }, "moduleLessons");
}
