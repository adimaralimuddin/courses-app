import React, { Key } from "react";

import ModuleType from "../../../../features/modules/ModuleTypes";
import Collapse from "../../../elements/Collapse";

interface Props {
  module: ModuleType;
  key?: Key;
  children: any;
  LessonAdder: any;
  ModuleUpdater: any;
}

export default function ModuleItemEditableComp({
  LessonAdder,
  ModuleUpdater,
  module,
  children,
}: Props) {
  return (
    <div className="bg-slate-700 flex-row p-0 ring-1 rounded-lg overflow-hidden">
      <Collapse
        Header={({ Toggle }: any) => (
          <div className="flex gap-2 p-2 bg-green-800">
            <Toggle />
            <div className="flex items-center gap-3 justify-between ">
              <p>{module.title}</p>
              <small>{module.id}</small>
              <p>{module.duration}</p>
            </div>
            {ModuleUpdater}
            {LessonAdder}
          </div>
        )}
      >
        {children}
      </Collapse>
    </div>
  );
}
