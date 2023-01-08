import gqlFetch from "../../api/gqlFetch";

export default async function lessonApiDeleteLesson(id: string | undefined) {
  return await gqlFetch(
    `mutation Mutation($id: String!) {
  delteLesson(id: $id) {
    id
  }
}
`,
    { id },
    "delteLesson"
  );
}
