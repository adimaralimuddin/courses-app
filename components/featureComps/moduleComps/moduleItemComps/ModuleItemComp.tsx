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
    <div className="bg-slate-700 flex-row p-0 ring-1 rounded-lg overflow-hidden">
      <Collapse
        Header={({ Toggle }: any) => (
          <div className="flex gap-2 p-2">
            <Toggle />
            <div className="flex items-center gap-3 justify-between ">
              <p>
                {module.title} {module.id}
              </p>
              <p>{module.duration}</p>
            </div>
            <div>
              {Updater && Updater}
              {Deleter && Deleter}
            </div>
          </div>
        )}
      >
        {children}
      </Collapse>
    </div>
  );
}
