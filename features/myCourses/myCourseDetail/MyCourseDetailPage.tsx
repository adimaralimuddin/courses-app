import React from "react";
import CourseDetailComp from "../../../components/featureComps/courseComps/courseDetailComps/CourseDetailComp";
import ModuleMainEditor from "../../modules/moduleLists/ModuleMainEditable";
import MyCourseDeleter from "../myCourseEditor/MyCourseDeleter";
import MyCourseUpdater from "../myCourseEditor/MyCourseUpdater";
import useMyCourse from "../myCourseHooks/useMyCourse";

export default function MyCourseDetailPage({ courseId }: { courseId: string }) {
  const { data } = useMyCourse(String(courseId));

  return (
    <div>
      <CourseDetailComp
        course={data}
        Updater={<MyCourseUpdater courseId={String(courseId)} />}
        Deleter={<MyCourseDeleter courseId={String(courseId)} />}
      />
      <ModuleMainEditor />
    </div>
  );
}
