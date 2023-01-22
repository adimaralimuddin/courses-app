import { useInfiniteQuery } from "@tanstack/react-query";
import create from "zustand";
import { LearnQueryType } from "../../learn/learnTypes/LearnQueryType";
import noteApiQueriesNote from "../noteApis/noteApiQueryQna";

export const NoteState = create<LearnQueryType, []>((set) => ({
  set,
  text: "",
  sort: "latest",
  lesson: "current",
  list: "my",
}));

export default function useNoteQueries(
  courseId: string,
  lessonId: string | undefined
) {
  const { set, ...queryStates } = NoteState((state) => state);
  const { text, lesson, list, sort } = queryStates;
  const { fetchNextPage, data, refetch, ...queries } = useInfiniteQuery({
    queryKey: ["note-queries", courseId, lessonId, lesson, list, sort],
    queryFn: ({ pageParam = undefined }) => {
      return noteApiQueriesNote({
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
      console.log("note pages", x?.pages);
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
