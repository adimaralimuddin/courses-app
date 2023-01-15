import gqlFetch from "../../api/gqlFetch";
import { CourseType } from "../../courses/courseTypes/CourseType";

export default async function myCourseApiAddCourse(course: CourseType) {
  return await gqlFetch(
    `  mutation AddCourse(
      $title: String!
      $imageUrl: String
      $description: String
      $price: Int
      $free: Boolean
      $discount: Int
      $discountType: String
      $ratings: Int
      $language: String
      $duration: Int
      $level: Int
      $creatorId: String!
    ) {
      addCourse(
        title: $title
        imageUrl: $imageUrl
        description: $description
        price: $price
        free: $free
        discount: $discount
        discountType: $discountType
        ratings: $ratings
        language: $language
        duration: $duration
        level: $level
        creatorId: $creatorId
      ) {
        description
        creatorId
        creator {
          about
          avatar
          email
          id
          name
        }
        discount
        discountType
        duration
        free
        id
        language
        level
        price
        ratings
        title
        imageUrl
      }
    }`,
    course,
    "addCourse"
  );
}
