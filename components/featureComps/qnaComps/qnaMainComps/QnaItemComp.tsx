import React, { ReactNode } from "react";
import QnaType from "../../../../features/qna/qnaTypes/QnaType";
import Avatar from "../../../elements/Avatar";
interface Props {
  qna: QnaType;
  Deleter?: ReactNode;
  Updater?: ReactNode;
}
export default function QnaItemComp({ qna, Deleter, Updater }: Props) {
  return (
    <div className="p-2 flex flex-col">
      <header className="flex justify-between">
        <div className="flex gap-3 items-center">
          <Avatar user={qna?.user} />
          <p>{qna?.text}</p>
        </div>
        <div>
          {Deleter && Deleter}
          {Updater && Updater}
        </div>
      </header>
      <footer className="flex justify-between items-center gap-3 py-1">
        <small className="text-[.7rem]">
          {qna?.createdAt && new Date(qna?.createdAt).toDateString()}
        </small>
        <small>reply 0</small>
      </footer>
    </div>
  );
}
