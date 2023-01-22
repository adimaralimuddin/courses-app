import { useMutation, useQueryClient } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";

export default function useLessonDeleter(moduleId: string | undefined) {
  const qClint = useQueryClient();

  const lessonDeleteQuery = useMutation(lessonDeleteQueryFn, {
    onSuccess: (data) => {
      qClint.invalidateQueries(["modulelessons", moduleId]);
      console.log("lessn deleted", data);
    },
  });
  return { ...lessonDeleteQuery };
}

async function lessonDeleteQueryFn(id: string | undefined) {
  const queryString = `mutation Mutation($id: String!) {
  delteLesson(id: $id) {
    id
  }
}`;
  return await gqlFetch(queryString, { id }, "delteLesson");
}
