import { useQuery } from "@tanstack/react-query";
import lessonApiLessonDetails from "../lessonApi/lessonApiLessonDetails";

export default function useLessonDetail(lessonId: string) {
  const query = useQuery(["lessonDetail", lessonId], () =>
    lessonApiLessonDetails(lessonId)
  );

  return {
    ...query,
  };
}
