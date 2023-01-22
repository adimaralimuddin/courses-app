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
      qClient.invalidateQueries(["note-queries", courseId, lessonId]);
    },
  });

  const remove = useMutation(noteApiDeleteNote, {
    onSuccess: (deletedNote) => {
      console.log("id", lessonId);
      console.log("deleted ", deletedNote);
      qClient.invalidateQueries(["note-queries", courseId, lessonId]);
    },
  });
  return { add, remove, addNote: add.mutate, removeNote: remove.mutate };
}
