import React, { useState } from "react";
import Modal from "../../../components/elements/Modal";
import LessonEditorComp from "../../../components/featureComps/lessonComps/lessonEditorComps/LessonEditorComp";
import LessonItemComp from "../../../components/featureComps/lessonComps/lessonItemComps/LessonItemComp";
import LessonDeleter from "../lessonEditor/LessonDeleter";
import useLessonMutate from "../lessonHooks/useLessonMutate";
import LessonType from "../LessonsTypes/LessonType";
interface Props {
  lesson: LessonType;
}
export default function LessonItemEditable({ lesson }: Props) {
  const { updateLesson } = useLessonMutate();
  const [open, setOpen] = useState(false);

  const onSave = (lessonData: LessonType) => {
    updateLesson(
      { ...lessonData, id: lesson.id },
      { onSuccess: () => setOpen(false) }
    );
  };
  return (
    <div>
      <LessonItemComp
        lesson={lesson}
        Deleter={<LessonDeleter id={lesson.id} />}
        Editor={
          <div>
            <button onClick={() => setOpen((p) => !p)}>edit</button>
            <Modal open={open} set={setOpen}>
              <LessonEditorComp onSave={onSave} lesson={lesson} />
            </Modal>
          </div>
        }
      />
    </div>
  );
}
