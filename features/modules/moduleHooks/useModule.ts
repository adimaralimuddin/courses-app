import { useQuery } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import LessonType from "../../lessons/LessonsTypes/LessonType";

export default function useModule(moduleId: string | undefined) {
  const moduleLessons = useQuery<LessonType[]>(
    ["modulelessons", moduleId],
    () => moduleLessonsQueryFn(moduleId),
    {
      // refetchOnWindowFocus: false,
      // enabled: false, // disable this query from automatically running
    }
  );

  return {
    moduleLessons,
  };
}

async function moduleLessonsQueryFn(
  moduleId: string | undefined
): Promise<LessonType[]> {
  const queryString = `query ModuleLessons($moduleId: String!) {
  moduleLessons(moduleId: $moduleId) {
    title
    id
    index
    description
  }
}`;
  return await gqlFetch(queryString, { moduleId }, "moduleLessons");
}
