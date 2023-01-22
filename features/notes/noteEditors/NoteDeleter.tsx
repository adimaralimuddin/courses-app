import React from "react";
import useNoteMutate from "../noteHooks/useNoteMutate";
interface Props {
  noteId: string;
  lessonId: string | undefined;
  courseId: string;
  set: (val: boolean) => any;
}
export default function NoteDeleter({
  noteId,
  lessonId,
  courseId,
  set,
}: Props) {
  const { removeNote } = useNoteMutate(lessonId, courseId);

  const onDelete = () => {
    removeNote(noteId);
    set(true);
  };

  return (
    <div>
      <button onClick={onDelete}>delete</button>
    </div>
  );
}
