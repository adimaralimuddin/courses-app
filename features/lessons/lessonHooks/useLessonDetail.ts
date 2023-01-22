import { useQuery } from "@tanstack/react-query";

export default function useLessonDetail(lessonId: string) {
  const query = useQuery(["lessonDetail", lessonId], () =>
    lessonDetailQueryFn(lessonId)
  );

  return {
    ...query,
  };
}

import gqlFetch from "../../api/gqlFetch";

async function lessonDetailQueryFn(id: string) {
  const queryString = `query Query($id: String!) {
  lessonDetail(id: $id) {
    id
    title
    preview
    moduleId
    index
    description
    videoUrl
  }
}`;
  return await gqlFetch(queryString, { id }, "lessonDetail");
}
