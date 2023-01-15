import React from "react";
import useQnaMutate from "../qnaHooks/useQnaMutate";
interface Props {
  qnaId: string;
  lessonId: string;
  courseId: string;
  set: (val: boolean) => any;
}
export default function QnaDeleter({ qnaId, lessonId, courseId, set }: Props) {
  const { removeQna } = useQnaMutate(lessonId, courseId);

  const onDelete = () => {
    removeQna(qnaId);
    set(true);
  };

  return (
    <div>
      <button onClick={onDelete}>delete</button>
    </div>
  );
}
