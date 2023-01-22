import React, { useState } from "react";
import Anim from "../../../components/elements/Anim";
import Avatar from "../../../components/elements/Avatar";
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
      <div className="p-2 flex flex-col">
        <header className="flex justify-between">
          <div className="flex gap-3 items-center">
            <Avatar user={qna?.user} />
            <p>{qna?.text}</p>
          </div>
          <div>
            {lessonId && (
              <QnaDeleter
                qnaId={qna?.id}
                lessonId={lessonId}
                courseId={courseId}
                set={setDeleting}
              />
            )}
          </div>
        </header>
        <footer className="flex justify-between items-center gap-3 py-1">
          <small className="text-[.7rem]">
            {qna?.createdAt && new Date(qna?.createdAt).toDateString()}
          </small>
          <small>reply 0</small>
        </footer>
      </div>
    </Anim>
  );
}
