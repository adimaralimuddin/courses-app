import { useMutation, useQueryClient } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import { CourseState } from "../courseStates/CourseState";

export default function useCourseDeleter() {
  const qClient = useQueryClient();
  const { cursor, filter, sort, order } = CourseState((state) => state);

  const courseDeleterQuery = useMutation(courseDeleterQueryFn, {
    onMutate: () => {},
    onSuccess: () => {
      qClient.invalidateQueries(["mycourses", cursor, filter, sort, order]);
    },
    onError: (err) => {},
  });

  return {
    ...courseDeleterQuery,
  };
}

async function courseDeleterQueryFn(id: string | undefined) {
  return await gqlFetch(
    `
mutation Mutation($id: String!) {
  deleteCourse(id: $id) {
    id
  }
}

`,
    { id },
    "deleteCourse"
  );
}
