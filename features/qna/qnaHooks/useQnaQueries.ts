import { useInfiniteQuery } from "@tanstack/react-query";
import create from "zustand";
import { LearnQueryType } from "../../learn/learnTypes/LearnQueryType";
import qnaApiQueriesQna from "../qnaApis/qnaApiQueriesQna";
import QnaType from "../qnaTypes/QnaType";

export const QnaState = create<LearnQueryType, []>((set) => ({
  set,
  text: "",
  sort: "latest",
  lesson: "current",
  question: "all",
}));

export default function useQnaQueries(
  courseId: string,
  lessonId: string | undefined
) {
  const { set, ...queryStates } = QnaState((state) => state);

  const { fetchNextPage, data, refetch, ...queries } = useInfiniteQuery({
    queryKey: ["qna-queries", courseId, lessonId],
    queryFn: ({ pageParam = undefined }) => {
      return qnaApiQueriesQna({
        cursor: pageParam,
        courseId,
        lessonId,
        ...queryStates,
      });
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage) return false;
      const { qnas, hasNextPage } = lastPage;
      return hasNextPage ? qnas?.[qnas?.length - 1]?.id : undefined;
    },
    onSuccess: (x) => {
      console.log("qna pages", x?.pages);
    },
  });

  function onQuery() {
    console.log(queryStates);
    refetch({});
  }

  return {
    queryStates: { set, ...queryStates },
    ...queryStates,
    ...queries,
    data,
    onQuery,
    fetchNextPage,
  };
}
