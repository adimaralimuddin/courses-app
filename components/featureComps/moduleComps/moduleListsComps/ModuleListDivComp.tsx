import React from "react";

interface Props {
  children: any;
  Adder?: any;
}
export default function ModuleListDivComp({ children, Adder }: Props) {
  return (
    <div className="ring-1 bg-green-800 p-2 flex flex-col gap-2">
      <div>{Adder}</div>
      <div className="flex-1 flex flex-col gap-2">{children}</div>
    </div>
  );
}
