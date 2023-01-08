import React from "react";

interface Props {
  children: any;
  Adder?: any;
}

export default function LessonListsDivComp({ children, Adder }: Props) {
  return (
    <div className="flex flex-col  bg-slate-700 gap-[1px] ">
      {Adder && <div>{Adder}</div>}
      <div className="flex-1">{children}</div>
    </div>
  );
}
