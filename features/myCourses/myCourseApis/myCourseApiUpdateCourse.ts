import gqlFetch from "../../api/gqlFetch";
import { CourseType } from "../../courses/courseTypes/CourseType";

export default async function myCourseApiUpdateCourse(courseData: CourseType) {
  return await gqlFetch(
    `
mutation UpdateCourse( $title: String!, $id: String!) {
    updateCourse( title: $title, id: $id) {
        id
        title
        creatorId
    }
}
`,
    courseData,
    "updateCourse"
  );
}
