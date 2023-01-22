import React, { useState } from "react";
import Modal from "../../../components/elements/Modal";
import ModalDiv from "../../../components/elements/ModalDiv";
import useLessonAdder from "../lessonHooks/useLessonAdder";
import LessonType from "../LessonsTypes/LessonType";
import LessonEditor from "./LessonEditor";

interface Props {
  moduleId: string | undefined;
}
export default function LessonAdder({ moduleId }: Props) {
  const [open, setOpen] = useState(false);
  const { mutate, isLoading } = useLessonAdder(moduleId);

  const onDone = (lessonData: LessonType) => {
    mutate(
      { ...lessonData, moduleId },
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
        className="px-3  font-semibold hover:underline"
        onClick={() => setOpen((p) => !p)}
      >
        + add lesson
      </button>
      <Modal open={open} set={setOpen}>
        <ModalDiv>
          <LessonEditor isLoading={isLoading} onSave={onDone} />
        </ModalDiv>
      </Modal>
    </div>
  );
}
