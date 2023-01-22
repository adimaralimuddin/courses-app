import { useQuery } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import { CourseType } from "../../courses/courseTypes/CourseType";

export default function useMyCourse(id: string | undefined) {
  const myCourseQuery = useQuery<CourseType>(["mycourse", id], () =>
    myCourseQueryFn(id)
  );
  return {
    ...myCourseQuery,
  };
}

async function myCourseQueryFn(id: string | undefined) {
  const queryString = `  query Query($id: String!) {
  myCourse(id: $id) {
    id
    free
    duration
    discountType
    discount
    description
    creatorId
    imageUrl
    language
    level
    price
   
    title
  }
}`;
  return gqlFetch(queryString, { id }, "myCourse");
}
