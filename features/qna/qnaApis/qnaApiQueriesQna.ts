import gqlFetch from "../../api/gqlFetch";
type Args = {
  cursor: string;
  courseId: string;
  text: string;
  sort: string;
  lesson: string;
  lessonId: string | undefined;
  list: string;
};
export default async function qnaApiQueriesQna(args: Args) {
  const { courseId, lessonId } = args;
  if (!courseId || !lessonId) return null;
  return await gqlFetch(
    `
query QnaQuery($courseId: String!, $text: String!, $sort: String!, $lesson: String!, $list: String!, $lessonId: String!, $cursor: String) {
  qnaQuery(courseId: $courseId, text: $text, sort: $sort, lesson: $lesson, list: $list, lessonId: $lessonId, cursor: $cursor) {
    qnas {
      id
      text
      userId
      createdAt
      user {
        avatar
        name
        id
      }
    }
    hasPrevPage
    hasNextPage
  }
}
`,
    args,
    "qnaQuery"
  );
}
