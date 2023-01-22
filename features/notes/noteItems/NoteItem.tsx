import React, { useState } from "react";
import Anim from "../../../components/elements/Anim";
import NoteDeleter from "../noteEditors/NoteDeleter";
import NoteType from "../noteTypes/NoteType";
interface Props {
  note: NoteType;
  lessonId: string | undefined;
  courseId: string;
  text: string;
}
export default function NoteItem({ note, lessonId, text, courseId }: Props) {
  const [deleting, setDeleting] = useState(false);
  if (text?.trim() !== "" && !note?.text?.trim()?.includes(text)) return null;
  return (
    <Anim open={!deleting} state={[" anim-mount ", " anim-unmount "]}>
      <div className="p-2 hover:ring-2d ring-1d flex justify-between dbg-indigo-50 rounded-lgd border-b ">
        <p>{note.text}</p>
        <div>
          {lessonId && (
            <NoteDeleter
              noteId={note?.id}
              lessonId={lessonId}
              courseId={courseId}
              set={setDeleting}
            />
          )}
          {/* {Updater && Updater} */}
        </div>
      </div>
    </Anim>
  );
}
