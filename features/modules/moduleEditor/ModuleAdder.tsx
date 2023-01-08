import { useRouter } from "next/router";
import React from "react";
import ModuleEditorComp from "../../../components/featureComps/moduleComps/moduleEditorComps/ModuleEditorComp";
import useModuleMutate from "../moduleHooks/useModuleMutate";
import ModuleType from "../ModuleTypes";

export default function ModuleAdder() {
  const {
    query: { courseId },
  } = useRouter();
  const { addModule } = useModuleMutate();
  const onAdd = (moduleData: ModuleType) => {
    addModule({ ...moduleData, courseId: String(courseId) });
  };
  return (
    <div>
      <ModuleEditorComp onSave={onAdd} />
    </div>
  );
}
