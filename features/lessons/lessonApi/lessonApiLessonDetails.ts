import gqlFetch from "../../api/gqlFetch";

export default async function lessonApiLessonDetails(id: string) {
  return await gqlFetch(
    `
query Query($id: String!) {
  lessonDetail(id: $id) {
    id
    title
    preview
    moduleId
    index
    description
    videoUrl
  }
}
        `,
    { id },
    "lessonDetail"
  );
}
