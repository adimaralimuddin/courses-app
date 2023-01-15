import React from "react";

interface Props {
  text?: string;
  word?: string;
}
export default function NoListsComp({ text, word }: Props) {
  return (
    <div className="flex-1 bg-red-50 rounded-lg min-h-[200px] max-h-[200px] flex items-center justify-center">
      <h3 className="text-slate-500">
        {text ? text : word ? `No ${word} Here!` : `No Data Here!`}
      </h3>
    </div>
  );
}
