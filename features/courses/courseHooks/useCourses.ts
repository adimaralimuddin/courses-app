import { useQuery, UseQueryResult } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import { CourseState } from "../courseStates/CourseState";
import CoursePageType from "../courseTypes/CoursePageType";
import { CourseQueryType } from "../courseTypes/CourseQueryType";

export default function useCourses() {
  const { set, ...states } = CourseState((state) => state);
  const { cursor, filter, sort, order } = states;

  const query: UseQueryResult<CoursePageType, unknown> = useQuery({
    queryKey: ["courses", cursor, filter, sort, order],
    queryFn: () => courseQueryFn(states),
    onError(err) {
      console.log(`err`, err);
    },
  });

  function onNext() {
    // get last course as next cursor
    const newCursor =
      query?.data?.courses?.[query?.data?.courses?.length - 1]?.id;
    set({ cursor: newCursor, queryDirection: 1 });
  }
  function onPrev() {
    set({ cursor: query?.data?.courses?.[0]?.id, queryDirection: 0 });
  }

  function onQuery() {
    query.refetch();
  }

  return { ...query, onNext, onPrev, onQuery };
}

async function courseQueryFn(args: CourseQueryType): Promise<CoursePageType> {
  console.log("args", args);
  const queryString = `query QueryCourse($filter: String!, $text: String!, $order: String!, $sort: String, $price: Int, $free: Boolean,  $duration: Int, $level: Int, $cursor: String, $queryDirection: Int, $language: String, $cateogry: String) {
  queryCourse(filter: $filter, text: $text, order: $order, sort: $sort, price: $price, free: $free,  duration: $duration, level: $level, cursor: $cursor, queryDirection: $queryDirection, language: $language, cateogry: $cateogry) {
    courses {
      free
      id
      duration
      discount
      discountType
      imageUrl
      language
      level
      price
      title
      description
       creator {
        avatar
        id
        email
      }
    }
    hasNextPage
    hasPrevPage
  }
}`;
  return gqlFetch(queryString, args, "queryCourse");
}
