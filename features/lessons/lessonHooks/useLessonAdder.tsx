import { useMutation, useQueryClient } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import LessonType from "../LessonsTypes/LessonType";

export default function useLessonAdder(moduleId: string | undefined) {
  const qClint = useQueryClient();

  const lessonAdderQuery = useMutation(lessonAdderQueryFn, {
    onSuccess: (addedLesson) => {
      console.log("added", addedLesson);
      qClint.invalidateQueries(["modulelessons", moduleId]);
    },
  });

  return { ...lessonAdderQuery };
}

async function lessonAdderQueryFn(lessonData: LessonType): Promise<LessonType> {
  const queryString = `mutation Mutation($moduleId: String!, $title: String!, $description: String!, $videoUrl: String!, $preview: Boolean!) {
  addLesson(moduleId: $moduleId, title: $title, description: $description, videoUrl: $videoUrl, preview: $preview) {
    id
    index
    title
    description

  }
}`;
  return await gqlFetch(queryString, lessonData, "addLesson");
}
