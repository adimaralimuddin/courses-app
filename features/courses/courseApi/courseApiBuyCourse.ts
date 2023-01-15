import gqlFetch from "../../api/gqlFetch";

export default async function courseApiBuyCourse(courseId: string | undefined) {
  return gqlFetch(
    `
mutation CourseBuy($courseId: String!) {
  courseBuy(courseId: $courseId) {
    students {
      about
      avatar
      email
      id
      name
    }
  }
}
`,
    { courseId },
    "courseBuy"
  );
}
