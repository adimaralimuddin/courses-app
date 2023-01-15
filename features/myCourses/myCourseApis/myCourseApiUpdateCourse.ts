import gqlFetch from "../../api/gqlFetch";
import { CourseType } from "../../courses/courseTypes/CourseType";

export default async function myCourseApiUpdateCourse(courseData: CourseType) {
  return await gqlFetch(
    `
mutation UpdateCourse($updateCourseId: String!, $title: String!, $imageUrl: String, $description: String, $price: Int, $free: Boolean, $discount: Int, $discountType: String, $ratings: Int, $language: String, $duration: Int, $level: Int) {
  updateCourse(id: $updateCourseId, title: $title, imageUrl: $imageUrl, description: $description, price: $price, free: $free, discount: $discount, discountType: $discountType, ratings: $ratings, language: $language, duration: $duration, level: $level) {
    creatorId
    description
    discount
    discountType
    duration
    free
    id
    imageUrl
    language
    level
    price
    ratings
    title
    creator {
      avatar
      email
      id
      name
    }
  }
}
`,
    courseData,
    "updateCourse"
  );
}
