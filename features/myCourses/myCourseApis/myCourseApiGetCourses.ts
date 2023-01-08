import gqlFetch from "../../api/gqlFetch";
import { CourseType } from "../../courses/courseTypes/CourseType";

export default async function myCourseApiGetCourses(
  creatorId: string | undefined | null
): Promise<CourseType[]> {
  return gqlFetch(
    `
query Query($creatorId: String!) {
  myCourses(creatorId: $creatorId) {
    id
    language
    level
    price
    ratings
    title
    duration
    discountType
    discount
    creatorId
    creator {
      avatar
      id
      name
    }
  }
}
        `,
    { creatorId },
    "myCourses"
  );
}
