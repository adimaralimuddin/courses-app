import React, { useState } from "react";
import Modal from "../../../components/elements/Modal";
import useLessonMutate from "../lessonHooks/useLessonMutate";
import LessonType from "../LessonsTypes/LessonType";
import LessonEditor from "./LessonEditor";

interface Props {
  moduleId: string | undefined;
}
export default function LessonAdder({ moduleId }: Props) {
  const [open, setOpen] = useState(false);
  const { addLesson } = useLessonMutate();
  const onDone = (lessonData: LessonType) => {
    addLesson({ ...lessonData, moduleId });
  };
  return (
    <div>
      <button
        className="rounded-full ring-1d ring-rose-400 px-3 text-rose-500 font-semibold"
        onClick={() => setOpen((p) => !p)}
      >
        add lesson
      </button>
      <Modal open={open} set={setOpen}>
        <div className="flex flex-col w-full max-w-xl">
          <LessonEditor onSave={onDone} />
        </div>
      </Modal>
    </div>
  );
}
