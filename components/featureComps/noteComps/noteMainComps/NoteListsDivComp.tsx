import React from "react";
interface Props {
  children: any;
}
export default function NoteListsDivComp({ children }: Props) {
  return (
    <div className="flex-1 flex flex-col p-[2px]  gap-4 overflow-y-auto">
      {children}
    </div>
  );
}
