import React, { useState } from "react";
import Modal from "../../../components/elements/Modal";
import ModalDiv from "../../../components/elements/ModalDiv";
import useLessonUpdater from "../lessonHooks/useLessonUpdater";
import LessonType from "../LessonsTypes/LessonType";
import LessonEditor from "./LessonEditor";

type Props = {
  lesson: LessonType;
  moduleId: string;
};
export default function LessonUpdater({ lesson, moduleId }: Props) {
  const [open, setOpen] = useState(false);

  const { mutate, isLoading } = useLessonUpdater(moduleId);

  const onUpdate = (lessonData: LessonType) => {
    mutate(
      { ...lessonData, id: lesson.id },
      { onSuccess: () => setOpen(false) }
    );
  };

  return (
    <div>
      <button onClick={() => setOpen((p) => !p)}>edit</button>
      <Modal open={open} set={setOpen}>
        <ModalDiv>
          <LessonEditor
            isLoading={isLoading}
            onSave={onUpdate}
            lesson={lesson}
            text="update"
          />
        </ModalDiv>
      </Modal>
    </div>
  );
}
