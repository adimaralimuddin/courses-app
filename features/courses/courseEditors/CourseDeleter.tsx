import React from "react";
import useCourseDeleter from "../courseHooks/useCourseDeleter";

interface Props {
  courseId: string | undefined;
}

export default function CourseDeleter({ courseId }: Props) {
  const { mutate } = useCourseDeleter();

  const onRemoveHandler = () => {
    mutate(courseId, {
      onSuccess: () => {},
    });
  };
  return (
    <div className="">
      <button onClick={onRemoveHandler}>Delete</button>
    </div>
  );
}
