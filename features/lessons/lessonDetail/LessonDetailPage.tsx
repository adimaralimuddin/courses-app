import React from "react";
import LessonDetailComp from "../../../components/featureComps/lessonComps/lessonDetails/LessonDetailComp";
import useLessonDetail from "../lessonHooks/useLessonDetail";

export default function LessonDetailPage({ lessonid }: { lessonid: string }) {
  const { data: lesson } = useLessonDetail(lessonid);
  return (
    <div>
      <LessonDetailComp lesson={lesson} />
    </div>
  );
}
