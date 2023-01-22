import { useMutation, useQueryClient } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import LessonType from "../LessonsTypes/LessonType";

export default function useLessonUpdater(moduleId: string | undefined) {
  const qClint = useQueryClient();

  const lessonUpdateQuery = useMutation(lessonUpdateQueryFn, {
    onSuccess: (data) => {
      console.log("updated ", data);
      qClint.invalidateQueries(["modulelessons", moduleId]);
    },
  });

  return {
    ...lessonUpdateQuery,
  };
}

async function lessonUpdateQueryFn(
  lessonData: LessonType
): Promise<LessonType> {
  const queryString = `mutation Mutation( $title: String!, $description: String, $videoUrl: String, $preview: Boolean, $id: String!) {
  updateLesson( title: $title, description: $description, videoUrl: $videoUrl, preview: $preview, id: $id) {
    preview
    title
    videoUrl
    index
    moduleId
    id
    description
  }
}`;
  return await gqlFetch(queryString, lessonData, "updateLesson");
}
