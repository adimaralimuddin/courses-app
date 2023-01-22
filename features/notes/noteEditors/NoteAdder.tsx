import React, { useState } from "react";
import Modal from "../../../components/elements/Modal";
import ModalDiv from "../../../components/elements/ModalDiv";
import ListItemEditorComp from "../../learn/learnEditor/ListItemEditorComp";

import useNoteMutate from "../noteHooks/useNoteMutate";
interface Props {
  lessonId: string | undefined;
  courseId: string;
}
export default function NoteAdder({ lessonId, courseId }: Props) {
  const [open, setOpen] = useState(false);

  const { addNote, add } = useNoteMutate(lessonId, courseId);

  const onAdd = (text: string) => {
    if (lessonId) {
      addNote(
        { courseId, lessonId, text },
        {
          onSuccess: () => setOpen(false),
        }
      );
    }
  };

  return (
    <div>
      <button className="font-semibold" onClick={() => setOpen((p) => !p)}>
        Add a Note
      </button>
      <Modal open={open} set={setOpen}>
        <ModalDiv>
          <ListItemEditorComp
            text="Note"
            isAdding={add?.isLoading}
            onDone={onAdd}
          />
        </ModalDiv>
      </Modal>
    </div>
  );
}
