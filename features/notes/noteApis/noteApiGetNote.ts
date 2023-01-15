import gqlFetch from "../../api/gqlFetch";
import NoteType from "../noteTypes/NoteType";

export default async function noteApiGetNote(
  lessonId: string | undefined
): Promise<NoteType[]> {
  if (!lessonId) return [];
  return gqlFetch(
    `
query Notess($lessonId: String!) {
  notes(lessonId: $lessonId) {
    id
    text
    time
    userId
  }
}
`,
    { lessonId },
    "notes"
  );
}
