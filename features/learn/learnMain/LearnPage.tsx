import React from "react";
import Tab from "../../../components/elements/Tab";
import LayoutMain from "../../../components/layout/LayoutMain";
import NoteMain from "../../notes/noteMain/NoteMain";
import QnaMain from "../../qna/qnaMain/QnaMain";
import useLearn from "../learnHooks/useLearn";
import LearnLessons from "../learnLessons/LearnLessons";
import LearnVideo from "../learnVideo/LearnVideo";
interface Props {
  courseId: string;
}
export default function LearnPage({ courseId }: Props) {
  const { data: learn } = useLearn(String(courseId));
  return (
    <LayoutMain
      headerClass=" bg-white"
      Child1={
        <div>
          <p>{learn?.course?.title}</p>
        </div>
      }
    >
      <div className="flex">
        <div className="flex flex-col flex-1 min-h-[1200px]">
          {<LearnVideo courseId={courseId} />}
          <Tab
            tabs={[
              ["Q&N", <QnaMain courseId={courseId} key={"qna-tab"} />],
              ["Notes", <NoteMain courseId={courseId} key={"note-tab"} />],
            ]}
          ></Tab>
        </div>
        <div className="max-w-[25%] sticky top-0 max-h-screen">
          <LearnLessons learn={learn} courseId={courseId} />
        </div>
      </div>
    </LayoutMain>
  );
}
