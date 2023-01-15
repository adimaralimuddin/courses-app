import gqlFetch from "../../api/gqlFetch";
import { CourseType } from "../courseTypes/CourseType";

export default async function courseApiGetCourse(
  courseId: string
): Promise<CourseType> {
  return await gqlFetch(
    `
query Query($courseId: String! ) {
  course(id: $courseId) {
    creatorId
    id
    students {
      id
      email
    }
    description
    discount
    discountType
    duration
    free
    imageUrl
    language
    level
    price
    ratings
    title
  }
}
    `,
    // ` query Course($courseId: String!) {
    //   course(id: $courseId) {
    //     creator {
    //       email
    //       name
    //       id
    //     }
    //     id
    //     title
    //     creatorId
    //     discount
    //     description
    //     discountType
    //     duration
    //     free
    //     imageUrl
    //     language
    //     level
    //     price
    //     ratings
    //   }
    // }`
    { courseId },
    "course"
  );
}
