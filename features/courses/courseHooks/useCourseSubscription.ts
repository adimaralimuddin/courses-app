import { useQuery } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";

export default function useCourseSubscription(courseId: string) {
  const subscriptionQuery = useQuery(["subscription", courseId], () =>
    courseSubscriptionQueryFn(courseId)
  );
  const isSubscribed = () => {
    return subscriptionQuery?.data;
  };
  return {
    ...subscriptionQuery,
    isSubscribed,
  };
}

async function courseSubscriptionQueryFn(courseId: string) {
  const queryString = `query Check($courseId: String!) {
  check(courseId: $courseId) {
    userId
    doneLesson
    done
    currentLessonId
    courseId
  }
}`;
  return gqlFetch(queryString, { courseId }, "check");
}
