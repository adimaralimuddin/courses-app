import gqlFetch from "../../api/gqlFetch";
import QnaType from "../qnaTypes/QnaType";

export default async function qnaApiAddQna(args: {
  lessonId: string;
  courseId: string;
  text: string;
}): Promise<QnaType> {
  return gqlFetch(
    `
mutation AddQna($lessonId: String!, $text: String!, $courseId: String!) {
  addQna(lessonId: $lessonId, text: $text,courseId: $courseId) {
    id
    text
    userId
  }
}
        `,
    args,
    "addQna"
  );
}
