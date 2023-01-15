import gqlFetch from "../../api/gqlFetch";
import NoteType from "../noteTypes/NoteType";

export default async function noteApiDeleteNote(id: string): Promise<NoteType> {
  return gqlFetch(
    `
mutation delete($id: String!) {
  deleteNote(id: $id) {
    id
  }
}
        `,
    { id },
    "deleteNote"
  );
}
