import React, { useState } from "react";
import Anim from "../../../components/elements/Anim";
import QnaItemComp from "../../../components/featureComps/qnaComps/qnaMainComps/QnaItemComp";
import QnaDeleter from "../qnaEditors/QnaDeleter";
import QnaType from "../qnaTypes/QnaType";
interface Props {
  qna: QnaType;
  lessonId: string | undefined;
  courseId: string;
  text: string;
}
export default function QnaItem({ qna, lessonId, text, courseId }: Props) {
  const [deleting, setDeleting] = useState(false);
  if (text?.trim() !== "" && !qna?.text?.trim()?.includes(text)) return null;
  return (
    <Anim open={!deleting} state={[" anim-mount ", " anim-unmount "]}>
      <QnaItemComp
        qna={qna}
        Deleter={
          lessonId && (
            <QnaDeleter
              qnaId={qna?.id}
              lessonId={lessonId}
              courseId={courseId}
              set={setDeleting}
            />
          )
        }
      />
    </Anim>
  );
}
