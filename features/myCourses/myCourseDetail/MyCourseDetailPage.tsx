import React from "react";
// import LazyLoad from "react-lazyload";

import CourseDetailComp from "../../../components/featureComps/courseComps/courseDetailComps/CourseDetailComp";
import LayoutMain from "../../../components/layout/LayoutMain";
import useCourseTrans from "../../courses/courseHooks/useCourseTrans";
import ModuleMainEditor from "../../modules/moduleLists/ModuleMainEditable";
import MyCourseDeleter from "../myCourseEditor/MyCourseDeleter";
import MyCourseUpdater from "../myCourseEditor/MyCourseUpdater";
import useMyCourse from "../myCourseHooks/useMyCourse";

export default function MyCourseDetailPage({ courseId }: { courseId: string }) {
  const { data } = useMyCourse(String(courseId));
  const { buyCourse } = useCourseTrans();

  return (
    <LayoutMain className="bg-[#e0fbf7]" headerClass="bg-[#a8ffdd]">
      <CourseDetailComp
        className=" bg-[#a8ffdd]"
        backClassName="bg-[#e0fbf7]"
        onBuy={buyCourse}
        course={data}
        Updater={<MyCourseUpdater courseId={String(courseId)} />}
        Deleter={<MyCourseDeleter courseId={String(courseId)} />}
      />
      <ModuleMainEditor />
    </LayoutMain>
  );
}
