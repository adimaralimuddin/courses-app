import React from "react";
interface Props {
  children: any;
}
export default function NoteQueryComp({ children }: Props) {
  return (
    <div className="flex-1 flex flex-col  ">
      <div className="flex-1  flex flex-col ">{children}</div>
    </div>
  );
}
