import gqlFetch from "../../api/gqlFetch";
import { CourseType } from "../courseTypes/CourseType";

export default async function courseApiGetCourse(
  courseId: string
): Promise<CourseType> {
  return await gqlFetch(
    ` query Course($courseId: String!) {
      course(id: $courseId) {
        creator {
          email
          name
          id
        }
        id
        title
        creatorId
        discount
        description
        discountType
        duration
        free
        imageUrl
        language
        level
        price
        ratings
      }
    }`,
    { courseId },
    "course"
  );
}
