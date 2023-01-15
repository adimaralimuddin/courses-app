import React from "react";
import useMyCourseMutate from "../myCourseHooks/useMyCourseMutate";

interface Props {
  courseId: string | undefined;
}

export default function MyCourseDeleter({ courseId }: Props) {
  const { removeCourse } = useMyCourseMutate();

  const onRemoveHandler = () => {
    removeCourse(courseId);
  };
  return (
    <div className="">
      <button onClick={onRemoveHandler}>Delete</button>
    </div>
  );
}
