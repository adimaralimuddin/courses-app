import { useMutation } from "@tanstack/react-query";
import courseApiBuyCourse from "../courseApi/courseApiBuyCourse";

export default function useCourseTrans() {
  const buy = useMutation(courseApiBuyCourse);

  return {
    buyCourse: buy.mutate,
  };
}
