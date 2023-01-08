import React, { useState } from "react";
import { CourseType } from "../../../../features/courses/courseTypes/CourseType";
import Card from "../../../elements/Card";
import Modal from "../../../elements/Modal";

interface Props {
  course?: CourseType | undefined;
  text?: string;
  // onDone: (callback: CourseType) => void;
  onDone: (courseData: CourseType, caller: () => any) => void;
}
export default function CourseEditorComp({ course, onDone, text }: Props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState<string>(course?.title || "");

  const onAdd = () => {
    const data: CourseType = {
      title,
      creatorId: "auth0|63b5544bc7f88e767ac799d9",
    };
    onDone(data, () => {
      setOpen(false);
    });
  };

  return (
    <div>
      <button onClick={() => setOpen((p) => !p)}>
        {text ? text : "Add Course"}
      </button>
      <Modal open={open} set={setOpen}>
        <div>
          <Card>
            {course?.title}
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
            <button onClick={onAdd}>Save</button>
          </Card>
        </div>
      </Modal>
    </div>
  );
}
