import gqlFetch from "../../api/gqlFetch";
import NoteType from "../noteTypes/NoteType";

export default async function noteApiAddNote(args: {
  lessonId: string;
  courseId: string;
  text: string;
}): Promise<NoteType> {
  return gqlFetch(
    `
mutation AddNote($lessonId: String!, $text: String!) {
  addNote(lessonId: $lessonId, text: $text) {
    id
    text
    time
    userId
  }
}
        `,
    args,
    "addNote"
  );
}
