import { useRouter } from "next/router";
import React, { useState } from "react";
import Modal from "../../../components/elements/Modal";
import ModalDiv from "../../../components/elements/ModalDiv";
import useModuleAdder from "../moduleHooks/useModuleAdder";
import ModuleType from "../ModuleTypes";
import ModuleEditor from "./ModuleEditor";

export default function ModuleAdder() {
  const [open, setOpen] = useState(false);
  const { courseId } = useRouter().query;

  const { mutate, isLoading, isError } = useModuleAdder();

  const onAdd = (moduleData: ModuleType) => {
    mutate(
      { ...moduleData, courseId: String(courseId) },
      {
        onSuccess: () => {
          setOpen(false);
        },
      }
    );
  };

  return (
    <div>
      <button
        onClick={() => setOpen((p) => !p)}
        className="font-semibold text-[1.2rem] hover:underline"
      >
        + Add Module
      </button>
      <Modal open={open} set={setOpen}>
        <ModalDiv>
          <ModuleEditor error={isError} loading={isLoading} onSave={onAdd} />
        </ModalDiv>
      </Modal>
    </div>
  );
}
