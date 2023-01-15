import React from "react";
import CourseDetailComp from "../../../components/featureComps/courseComps/courseDetailComps/CourseDetailComp";
import LayoutMain from "../../../components/layout/LayoutMain";
import ModuleMain from "../../modules/moduleLists/ModuleMain";
import useCourse from "../courseHooks/useCourse";
import useCourseTrans from "../courseHooks/useCourseTrans";
type Props = {
  courseId: string;
};
export default function CourseDetailPage({ courseId }: Props) {
  const { data } = useCourse(courseId);
  const { buyCourse } = useCourseTrans();

  return (
    <LayoutMain className="bg-primary-bg" headerClass="bg-rose-300">
      <CourseDetailComp course={data} onBuy={buyCourse} />
      <ModuleMain />
    </LayoutMain>
  );
}
