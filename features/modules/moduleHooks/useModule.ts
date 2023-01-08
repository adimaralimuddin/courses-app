import { useQuery } from "@tanstack/react-query";
import LessonType from "../../lessons/LessonsTypes/LessonType";
import moduleApiGetModuleLessons from "../moduleApi/moduleApiGetModuleLessons";

export default function useModule(moduleId: string | undefined) {
  const moduleLessons = useQuery<LessonType[]>(
    ["modulelessons", moduleId],
    () => moduleApiGetModuleLessons(moduleId),
    {
      // refetchOnWindowFocus: false,
      // enabled: false, // disable this query from automatically running
    }
  );

  return {
    moduleLessons,
  };
}
