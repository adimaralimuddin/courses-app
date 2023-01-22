import React from "react";
import useLessonDeleter from "../lessonHooks/useLessonDeleter";

type Props = {
  lessonId: string;
  setDeleted: (...x: any) => void;
};
export default function LessonDeleter({ lessonId, setDeleted }: Props) {
  const { mutate } = useLessonDeleter(lessonId);

  const onDelete = () => {
    console.log("to revmoe lesson ", lessonId);
    setDeleted(true);
    mutate(lessonId, {
      onSuccess: () => {},
    });
  };
  return (
    <div>
      <button onClick={onDelete}>x</button>
    </div>
  );
}
