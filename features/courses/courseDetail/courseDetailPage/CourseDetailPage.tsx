import React from "react";
import LayoutMain from "../../../../components/layout/LayoutMain";
import ModuleMain from "../../../modules/moduleLists/ModuleMain";
import useCourse from "../../courseHooks/useCourse";
import { CourseType } from "../../courseTypes/CourseType";
import CourseActions from "../courseDetailComps/CourseActions";
import CourseDetailHeaderDiv from "../courseDetailComps/CourseDetailHeaderDiv";
import CourseDetailPrimaryData from "../courseDetailComps/CourseDetailPrimaryData";
import CourseDetailSecondaryData from "../courseDetailComps/CourseDetailSecondaryData";
type Props = {
  courseId: string;
  preCourse?: CourseType;
};
export default function CourseDetailPage({ courseId, preCourse }: Props) {
  const { data: course } = useCourse(courseId);
  const anim = true;
  return (
    <LayoutMain className="bg-primary-bg" headerClass="bg-rose-300">
      <CourseDetailHeaderDiv anim={anim}>
        <CourseDetailPrimaryData course={course || preCourse} anim={anim}>
          <CourseActions course={course} courseId={courseId} />
          <CourseDetailSecondaryData course={course || preCourse} />
        </CourseDetailPrimaryData>
      </CourseDetailHeaderDiv>
      <ModuleMain />
    </LayoutMain>
  );
}
