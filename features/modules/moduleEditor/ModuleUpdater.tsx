import { useRouter } from "next/router";
import React, { useState } from "react";
import Modal from "../../../components/elements/Modal";
import ModuleEditorComp from "../../../components/featureComps/moduleComps/moduleEditorComps/ModuleEditorComp";
import useModuleMutate from "../moduleHooks/useModuleMutate";
import ModuleType from "../ModuleTypes";

export default function ModuleUpdater() {
  const {
    query: { courseId },
  } = useRouter();
  const [open, setOpen] = useState(false);
  const {} = useModuleMutate();

  const onAddHandler = (moduleData: ModuleType) => {
    // console.log(first)
    // addModule(
    //   { ...moduleData, courseId: String(courseId) },
    //   {
    //     onSuccess: (x) => {
    //       console.log("module added ", x);
    //       setOpen(false);
    //     },
    //   }
    // );
  };
  return (
    <div>
      <div>
        <button onClick={() => setOpen((p) => !p)}>edit!</button>
        <Modal open={open} set={setOpen}>
          <ModuleEditorComp onSave={onAddHandler} />
        </Modal>
      </div>
    </div>
  );
}
