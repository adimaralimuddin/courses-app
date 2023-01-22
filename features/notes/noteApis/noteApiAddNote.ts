import gqlFetch from "../../api/gqlFetch";
import NoteType from "../noteTypes/NoteType";

export default async function noteApiAddNote(args: {
  lessonId: string;
  courseId: string;
  text: string;
}): Promise<NoteType> {
  return gqlFetch(
    `
mutation AddNote($courseId: String!, $text: String!, $lessonId: String!) {
  addNote(courseId: $courseId, text: $text, lessonId: $lessonId) {
    id
    text
    userId
    user {
      avatar
      name
    }
  }
}
        `,
    args,
    "addNote"
  );
}
