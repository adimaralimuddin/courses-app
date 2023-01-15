import gqlFetch from "../../api/gqlFetch";
import QnaType from "../qnaTypes/QnaType";

export default async function qnaApiGetQnas(
  lessonId: string | undefined
): Promise<QnaType[]> {
  if (!lessonId) return [];
  const x = await gqlFetch(
    `
query Qnas(, $lessonId: String!) {
  qnas(  lessonId: $lessonId) {
    id
    text
    userId
    user{
      name
      avatar
    }
  }
}
`,
    { lessonId },
    "qnas"
  );
  return x;
}
