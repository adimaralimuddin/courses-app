import { useQuery } from "@tanstack/react-query";
import qnaApiGetQnas from "../qnaApis/qnaApiGetQnas";

export default function useQnas(lessonId: string | undefined) {
  const query = useQuery(["qnas", lessonId], () => qnaApiGetQnas(lessonId));

  return {
    ...query,
  };
}
