import React, { useState } from "react";
import Anim from "../../../components/elements/Anim";
import LessonDeleter from "../lessonEditor/LessonDeleter";
import LessonUpdater from "../lessonEditor/LessonUpdater";
import LessonType from "../LessonsTypes/LessonType";
import LessonItem from "./LessonItem";
interface Props {
  lesson: LessonType;
  moduleId: string | undefined;
}
export default function LessonItemEditable({ lesson, moduleId }: Props) {
  const [deleted, setDeleted] = useState(false);

  return (
    <Anim open={!deleted}>
      <LessonItem
        lesson={lesson}
        Deleter={
          lesson?.id && (
            <LessonDeleter setDeleted={setDeleted} lessonId={lesson.id} />
          )
        }
        Editor={
          moduleId && <LessonUpdater lesson={lesson} moduleId={moduleId} />
        }
      />
    </Anim>
  );
}
