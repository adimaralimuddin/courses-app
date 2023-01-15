import { useMutation, useQueryClient } from "@tanstack/react-query";
import noteApiAddNote from "../noteApis/noteApiAddNote";
import noteApiDeleteNote from "../noteApis/noteApiDeleteNote";
import NoteType from "../noteTypes/NoteType";

export default function useNoteMutate(
  lessonId: string | undefined,
  courseId?: string
) {
  const qClient = useQueryClient();
  const add = useMutation(noteApiAddNote, {
    onSuccess: (addedNote) => {
      qClient.setQueriesData(
        ["notes", lessonId],
        (prev: NoteType[] | undefined = []) => {
          return [...prev, addedNote];
        }
      );
    },
  });

  const remove = useMutation(noteApiDeleteNote, {
    onSuccess: (deletedNote) => {
      console.log("id", lessonId);
      console.log("deleted ", deletedNote);
      qClient.setQueriesData(
        ["notes", lessonId],
        (prev: NoteType[] | undefined = []) => {
          console.log("prev", prev);
          return prev?.filter((q) => q.id !== deletedNote.id);
        }
      );
    },
  });
  return { addNote: add.mutate, removeNote: remove.mutate };
}
