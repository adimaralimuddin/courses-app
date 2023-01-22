import { useMutation, useQueryClient } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";

const QueryKey = "subscribed";

export default function useCourseBuyer(courseId: string) {
  const qClient = useQueryClient();
  const courseBuyerQuery = useMutation(courseBuyQueryFn, {
    onSuccess: () => {
      qClient.setQueriesData([QueryKey, courseId], () => {
        return { courseId };
      });
    },
  });

  return {
    ...courseBuyerQuery,
  };
}

async function courseBuyQueryFn(courseId: string | undefined) {
  const queryString = `mutation CourseBuy($courseId: String!) {
  courseBuy(courseId: $courseId) {
    students {
      about
      avatar
      email
      id
      name
    }
  }
}`;
  return gqlFetch(queryString, { courseId }, "courseBuy");
}
