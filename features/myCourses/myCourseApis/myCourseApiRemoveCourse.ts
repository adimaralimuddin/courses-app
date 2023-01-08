import gqlFetch from "../../api/gqlFetch";

export default async function myCourseApiRemoveCourse(id: string | undefined) {
  return await gqlFetch(
    `
mutation Mutation($id: String!) {
  deleteCourse(id: $id) {
    id
  }
}

`,
    { id },
    "deleteCourse"
  );
}
