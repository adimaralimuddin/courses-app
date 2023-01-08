import React, { useState } from "react";
import Modal from "../../../components/elements/Modal";
import useLessonMutate from "../lessonHooks/useLessonMutate";
import LessonType from "../LessonsTypes/LessonType";
import LessonEditor from "./LessonEditor";

interface Props {
  lesson: LessonType;
}
export default function LessonUpdater({ lesson }: Props) {
  const { updateLesson } = useLessonMutate();
  const [open, setOpen] = useState(false);
  const onSave = (newLessonData: LessonType) => {
    console.log("old", lesson);
    console.log("new lesson", newLessonData);
    updateLesson({ ...newLessonData, id: lesson.id });
  };
  return (
    <div>
      <button onClick={() => setOpen((p) => !p)}>update</button>
      <Modal open={open} set={setOpen}>
        <LessonEditor onSave={onSave} lesson={lesson} />
      </Modal>
    </div>
  );
}
