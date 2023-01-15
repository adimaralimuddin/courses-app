import React from "react";
import useNoteMutate from "../noteHooks/useNoteMutate";
interface Props {
  noteId: string;
  lessonId: string | undefined;
}
export default function NoteDeleter({ noteId, lessonId }: Props) {
  const { removeNote } = useNoteMutate(lessonId);

  const onDelete = () => {
    removeNote(noteId);
  };

  return (
    <div>
      <button onClick={onDelete}>delete</button>
    </div>
  );
}
