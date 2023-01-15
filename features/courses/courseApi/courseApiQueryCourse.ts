import gqlFetch from "../../api/gqlFetch";
import { CourseType } from "../courseTypes/CourseType";

interface Args {
  filter: string;
  text: string;
  order: string;
  sort: string;
  price: number | undefined;
  discount: number | undefined;
  ratings: number | undefined;
  duration: number | undefined;
  level: number | null;
  language: string | null;
  free: boolean | null;
  cursor: string | null;
}
export default async function courseApiQueryCourse(args: Args): Promise<{
  courses: CourseType[];
  hasPrevPage: boolean;
  hasNextPage: boolean;
}> {
  console.log("args", args);
  // console.log("cursor", args.cursor);
  return gqlFetch(
    `
query QueryCourse($filter: String!,  , $sort: String, $text: String!, $price: Int, $free: Boolean, $discount: Int, $ratings: Int, $language: String, $duration: Int, $level: Int, $order: String!,$cursor: String,$queryDirection: Int!) {
  queryCourse(filter: $filter,  sort: $sort, text: $text, price: $price, free: $free, discount: $discount, ratings: $ratings, language: $language, duration: $duration, level: $level, order: $order,cursor: $cursor,queryDirection: $queryDirection) {
    hasPrevPage
    hasNextPage
    courses{
      id
      imageUrl
      title
      free
      discount
      ratings
      language
      duration
      level
      price
      description
      creatorId
      creator {
        avatar
        name
      }
    }
  }
}
        `,
    args,
    "queryCourse"
  );
}
