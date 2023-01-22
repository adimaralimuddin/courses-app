import React from "react";
import useLessonDetail from "../lessonHooks/useLessonDetail";

export default function LessonDetailPage({ lessonid }: { lessonid: string }) {
  const { data: lesson } = useLessonDetail(lessonid);
  return <div>lesson detail per</div>;
}
