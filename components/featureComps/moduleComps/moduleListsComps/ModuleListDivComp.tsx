import React from "react";

interface Props {
  children: any;
  Adder?: any;
}
export default function ModuleListDivComp({ children, Adder }: Props) {
  return (
    <div className=" flex min-h-[800px] ">
      <div className=" flex w-full max-w-5xl mx-auto flex-col gap-2 p-2">
        <div className="flex justify-between">{Adder}</div>
        <h1 className="text-center font-bold text-slate-800 py-2 pb-6">
          Modules
        </h1>
        <div className="flex-1 flex flex-col gap-3">{children}</div>
      </div>
    </div>
  );
}
