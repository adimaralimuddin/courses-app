import React from "react";
interface Props {
  children?: any;
  Adder?: any;
}
export default function NoteMainComp({ children, Adder }: Props) {
  return (
    <div className="p-3  flex-1 flex flex-col ">
      <div className="flex-1 flex flex-col mx-auto w-full max-w-3xl  ">
        <div className="py-2">{Adder && Adder}</div>
        <div className="flex-1 flex flex-col">{children}</div>
      </div>
    </div>
  );
}
