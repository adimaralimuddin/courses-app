import React from "react";

interface Props {
  children: any;
  Adder?: any;
}

export default function LessonListDiv({ children, Adder }: Props) {
  return (
    <div className="flex flex-col   gap-[1px] bg-white bg-opacity-70 ">
      {Adder && <div className="p-2">{Adder}</div>}
      <div className="flex-1">{children}</div>
    </div>
  );
}
