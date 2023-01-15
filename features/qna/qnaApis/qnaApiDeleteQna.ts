import gqlFetch from "../../api/gqlFetch";
import QnaType from "../qnaTypes/QnaType";

export default async function qnaApiDeleteQna(id: string): Promise<QnaType> {
  return gqlFetch(
    `
mutation DeleteQna($id: String!) {
  deleteQna(id: $id) {
    id
  }
}
        `,
    { id },
    "deleteQna"
  );
}
