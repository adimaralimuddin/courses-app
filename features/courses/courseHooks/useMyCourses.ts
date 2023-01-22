import { useQuery, UseQueryResult } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import { CourseState } from "../../courses/courseStates/CourseState";
import CoursePageType from "../../courses/courseTypes/CoursePageType";
import { CourseQueryType } from "../courseTypes/CourseQueryType";

export default function useMyCourses() {
  const { set, ...states } = CourseState((state) => state);
  const { cursor, filter, sort, order } = states;

  const query: UseQueryResult<CoursePageType, unknown> = useQuery(
    ["mycourses", cursor, filter, sort, order],
    () => courseQueryFun(states)
  );

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

async function courseQueryFun(args: CourseQueryType): Promise<CoursePageType> {
  const queryString = `query QueryMyCourse($filter: String!, $text: String!, $order: String!, $level: Int, $duration: Int, $cateogry: String, $language: String, $free: Boolean, $price: Int, $queryDirection: Int, $cursor: String, $sort: String) {
    queryMyCourse(filter: $filter, text: $text, order: $order, level: $level, duration: $duration, cateogry: $cateogry, language: $language, free: $free, price: $price, queryDirection: $queryDirection, cursor: $cursor, sort: $sort) {
      hasPrevPage
      hasNextPage
      courses {
        creator {
          id
          avatar
          email
        }
        imageUrl
        description
        language
        discount
        discountType
        duration
        free
        id
        description
        level
        price
        title
      }
    }
  }`;
  return gqlFetch(queryString, args, "queryMyCourse");
}
