import React from "react";
import LayoutMain from "../../../../components/layout/LayoutMain";
import ModuleMainEditor from "../../../modules/moduleLists/ModuleMainEditable";
import useMyCourse from "../../courseHooks/useMyCourse";
import CourseActions from "../courseDetailComps/CourseActions";
import CourseDetailHeaderDiv from "../courseDetailComps/CourseDetailHeaderDiv";
import CourseDetailPrimaryData from "../courseDetailComps/CourseDetailPrimaryData";
import CourseDetailSecondaryData from "../courseDetailComps/CourseDetailSecondaryData";

export default function MyCourseDetailPage({ courseId }: { courseId: string }) {
  const { data: course } = useMyCourse(String(courseId));

  return (
    <LayoutMain className="bg-[#e0fbf7]" headerClass="bg-[#a8ffdd]">
      <CourseDetailHeaderDiv
        className=" bg-[#a8ffdd]"
        backClassName="bg-[#e0fbf7]"
      >
        <CourseDetailPrimaryData course={course}>
          <CourseActions course={course} courseId={courseId} />
          <CourseDetailSecondaryData course={course} />
        </CourseDetailPrimaryData>
      </CourseDetailHeaderDiv>
      <ModuleMainEditor />
    </LayoutMain>
  );
}
