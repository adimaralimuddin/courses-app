import React, { ReactNode } from "react";
import ModuleType from "../../../../features/modules/ModuleTypes";
import Collapse from "../../../elements/Collapse";
interface Props {
  module: ModuleType;
  children: ReactNode;
}
export default function LearnModuleItemComp({ module, children }: Props) {
  return (
    <div className=" border-b  ">
      <Collapse
        state={true}
        Header={({ Toggle }: any) => (
          <div className="flex gap-2 p-2 bg-slate-100">
            <Toggle />
            <div className="flex-1 text-sm flex flex-col ">
              <p className="font-bold">{module.title}</p>
              <small>{module.duration}</small>
            </div>
          </div>
        )}
      >
        {children}
      </Collapse>
    </div>
  );
}
