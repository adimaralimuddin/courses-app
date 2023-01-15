import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { JsxElement } from "typescript";
interface Props {
  tabs: [string, ReactElement][];
}
export default function Tab({ tabs }: Props) {
  const [Tab, setTab] = useState<[string, ReactElement] | null>(tabs?.[0]);

  const isActive = (
    tab: string,
    a: string | boolean = true,
    b: string | boolean = true
  ) => (Tab?.[0] == tab ? a : b);
  return (
    <div className="flex flex-col flex-1 ">
      <div className="flex flex-wrap gap-1 border-b">
        {tabs?.map((tab) => (
          <button
            className={
              "flex-1d max-w-[200px]d p-2 min-w-[90px]  " +
              isActive(
                tab?.[0],
                " text-slate-700 font-bold",
                "text-slate-600 hover:font-semibold"
              )
            }
            onClick={() => setTab(tab)}
            key={tab?.[0]}
          >
            {tab?.[0]}
          </button>
        ))}
      </div>
      <div className="flex-1 flex flex-col">{Tab?.[1]}</div>
    </div>
  );
}
