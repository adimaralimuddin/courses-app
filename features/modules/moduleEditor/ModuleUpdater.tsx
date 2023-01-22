import { useRouter } from "next/router";
import React, { useState } from "react";
import Modal from "../../../components/elements/Modal";
import ModalDiv from "../../../components/elements/ModalDiv";
import useModuleUpdater from "../moduleHooks/useModuleUpdater";
import ModuleType from "../ModuleTypes";
import ModuleEditor from "./ModuleEditor";

interface Props {
  module?: ModuleType;
}

export default function ModuleUpdater({ module }: Props) {
  const { courseId } = useRouter().query;
  const [open, setOpen] = useState(false);

  const { mutate, isLoading, isError } = useModuleUpdater();

  const onAddHandler = (moduleData: ModuleType) => {
    console.log({ id: module?.id, ...moduleData });
    if (module?.id && module?.id.trim() !== "") {
      mutate(
        { id: module?.id, ...moduleData },
        {
          onSuccess: () => {
            setOpen(false);
          },
        }
      );
    }
  };
  return (
    <div>
      <button onClick={() => setOpen((p) => !p)}>
        <small>edit</small>
      </button>
      <Modal open={open} set={setOpen}>
        <ModalDiv>
          <ModuleEditor
            module={module}
            loading={isLoading}
            error={isError}
            title="Update module"
            actionText="update"
            onSave={onAddHandler}
          />
        </ModalDiv>
      </Modal>
    </div>
  );
}
