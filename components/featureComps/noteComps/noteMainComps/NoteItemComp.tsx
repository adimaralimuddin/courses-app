import React, { ReactNode } from "react";
import NoteType from "../../../../features/notes/noteTypes/NoteType";
interface Props {
  note: NoteType;
  Deleter?: ReactNode;
  Updater?: ReactNode;
}
export default function NoteItemComp({ note, Deleter, Updater }: Props) {
  return (
    <div className="p-2 hover:ring-2d ring-1d flex justify-between dbg-indigo-50 rounded-lgd border-b ">
      <p>{note.text}</p>
      <div>
        {Deleter && Deleter}
        {Updater && Updater}
      </div>
    </div>
  );
}
