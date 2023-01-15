import { useQuery, UseQueryResult } from "@tanstack/react-query";
import courseApiQueryCourse from "../courseApi/courseApiQueryCourse";
import { CourseState } from "../courseStates/CourseState";
import { CourseType } from "../courseTypes/CourseType";

export default function useCourses() {
  const { set, ...states } = CourseState((state) => state);

  const query: UseQueryResult<
    {
      courses: CourseType[];
      hasPrevPage: boolean;
      hasNextPage: boolean;
    },
    unknown
  > = useQuery(["courses", states.cursor], () => courseApiQueryCourse(states), {
    onSuccess: (x) => {
      console.log("success query --", x);
    },
  });

  function onNext() {
    const newCursor =
      query?.data?.courses?.[query?.data?.courses?.length - 1]?.id;
    set({ cursor: newCursor, queryDirection: 1 });
  }
  function onPrev() {
    set({ cursor: query?.data?.courses?.[0]?.id, queryDirection: 0 });
  }
  function onSearch() {
    console.log("serach ", states);
    query.refetch();
  }
  function onQuery() {
    console.log("state", states);
    query.refetch();
  }
  return {
    ...query,
    onNext,
    onPrev,
    onSearch,
    onQuery,
  };
}
