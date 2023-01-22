import React, { useState } from "react";
import Modal from "../../../components/elements/Modal";
import ModalDiv from "../../../components/elements/ModalDiv";
import ListItemEditorComp from "../../learn/learnEditor/ListItemEditorComp";

import useQnaMutate from "../qnaHooks/useQnaMutate";
interface Props {
  lessonId: string | undefined;
  courseId: string | undefined;
}
export default function QnaAdder({ lessonId, courseId }: Props) {
  const [open, setOpen] = useState(false);

  const { addQna, add } = useQnaMutate(lessonId, courseId);

  const onAdd = (text: string) => {
    if (lessonId && courseId) {
      addQna(
        { lessonId, text, courseId },
        {
          onSuccess: () => setOpen(false),
        }
      );
    }
  };

  return (
    <div>
      <button className="font-semibold" onClick={() => setOpen((p) => !p)}>
        Add a Question
      </button>
      <Modal open={open} set={setOpen}>
        <ModalDiv>
          <ListItemEditorComp
            text="Qna"
            isAdding={add.isLoading}
            onDone={onAdd}
          />
        </ModalDiv>
      </Modal>
    </div>
  );
}
