import React from "react";
import NoteItemComp from "../../../components/featureComps/noteComps/noteMainComps/NoteItemComp";
import NoteDeleter from "../noteEditors/QnaDeleter";
import NoteType from "../noteTypes/NoteType";
interface Props {
  note: NoteType;
  lessonId: string | undefined;
}
export default function NoteItem({ note, lessonId }: Props) {
  return (
    <NoteItemComp
      note={note}
      Deleter={<NoteDeleter noteId={note.id} lessonId={lessonId} />}
    />
  );
}
