import React, { Key } from "react";
import ModuleType from "../../../../features/modules/ModuleTypes";
import Collapse from "../../../elements/Collapse";

interface Props {
  module: ModuleType;
  key?: Key;
  children: any;
  Updater?: any;
  Deleter?: any;
}

export default function ModuleItemComp({
  module,
  children,
  Updater,
  Deleter,
}: Props) {
  return (
    <div className=" flex-row p-0 ring-2 ring-rose-300d ring-slate-600 rounded-lg overflow-hidden  ">
      <Collapse
        Header={({ Toggle }: any) => (
          <div className="flex gap-2 p-2 justify-between px-3 bg-white ">
            <Toggle />
            <div className="flex-1 flex flex-cold justify-between items-center px-1 ">
              <h3 className="font-semibold text-[1.1rem] text-slate-700">
                {module.title}
              </h3>
              <small>{"29 days" || module.duration}</small>
            </div>
            <div>
              {Updater && Updater}
              {/* {Deleter && Deleter} */}
            </div>
          </div>
        )}
      >
        {children}
      </Collapse>
    </div>
  );
}
