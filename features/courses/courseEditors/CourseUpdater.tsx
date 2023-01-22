import React, { useState } from "react";
import Modal from "../../../components/elements/Modal";
import ModalDiv from "../../../components/elements/ModalDiv";
import { CourseType } from "../../courses/courseTypes/CourseType";
import useCourseUpdater from "../courseHooks/useCourseUpdater";
import CourseEditor from "./CourseEditor";
interface Props {
  course: CourseType;
}
export default function CourseUpdater({ course }: Props) {
  const [open, setOpen] = useState(false);

  const { mutate } = useCourseUpdater();

  const onDone = (courseData: CourseType) => {
    console.log("to update course ", courseData);
    mutate({ ...courseData, id: course.id });
  };

  return (
    <div className="">
      <button
        className=" text-whit font-semibold text-lg p-3 pt-4 hover:underline "
        onClick={() => setOpen((p) => !p)}
      >
        update Course
      </button>
      <Modal open={open} set={setOpen}>
        <ModalDiv>
          <CourseEditor
            text="update"
            course={course}
            onDone={onDone}
            isLoading={false}
          />
        </ModalDiv>
      </Modal>
    </div>
  );
}
