import React from "react";
import CourseDetailComp from "../../../components/featureComps/courseComps/courseDetailComps/CourseDetailComp";
import ModuleMain from "../../modules/moduleLists/ModuleMain";
import useCourse from "../courseHooks/useCourse";
type Props = {
  courseId: string;
};
export default function CourseDetailPage({ courseId }: Props) {
  const { data } = useCourse(courseId);

  return (
    <div>
      <CourseDetailComp course={data} />
      <ModuleMain />
    </div>
  );
}
