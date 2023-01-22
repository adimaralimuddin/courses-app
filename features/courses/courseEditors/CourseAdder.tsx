import React, { useState } from "react";
import Modal from "../../../components/elements/Modal";
import ModalDiv from "../../../components/elements/ModalDiv";
import { CourseType } from "../../courses/courseTypes/CourseType";
import useCourseAdder from "../courseHooks/useCourseAdder";
import CourseEditor from "./CourseEditor";

export default function CourseAdder() {
  const { mutate, isLoading } = useCourseAdder();
  const [open, setOpen] = useState(false);

  const onDone = (courseData: CourseType) => {
    mutate(
      { ...courseData, duration: 70 },
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
        className=" text-whit font-semibold text-lg p-3 pt-4 hover:underline "
        onClick={() => setOpen((p) => !p)}
      >
        + Add Course
      </button>
      <Modal open={open} set={setOpen}>
        <ModalDiv>
          <CourseEditor isLoading={isLoading} onDone={onDone} />
        </ModalDiv>
      </Modal>
    </div>
  );
}
