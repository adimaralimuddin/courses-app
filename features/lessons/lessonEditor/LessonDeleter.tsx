import React from "react";
import useLessonMutate from "../lessonHooks/useLessonMutate";
interface Props {
  id: string | undefined;
}
export default function LessonDeleter({ id }: Props) {
  const { removeLesson } = useLessonMutate();

  const onDelete = () => {
    console.log("to revmoe lesson ", id);
    removeLesson(id);
  };
  return (
    <div>
      <button onClick={onDelete}>x</button>
    </div>
  );
}
