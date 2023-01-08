import React from "react";
import ModuleType from "../../../../features/modules/ModuleTypes";
import ModuleItemComp from "../moduleItemComps/ModuleItemComp";
interface Props {
  modules: ModuleType[] | undefined;
  Item: any;
}
export default function ModuleListComp({ modules, Item }: Props) {
  return (
    <div className="p-2 flex flex-col gap-3">
      {modules?.map((module, ind) => (
        <ModuleItemComp module={module} key={module.id || ind}>
          hello for now!
        </ModuleItemComp>
      ))}
    </div>
  );
}
