import React, { useState } from "react";
import LayoutMain from "../../../../components/layout/LayoutMain";
import { CourseType } from "../../courseTypes/CourseType";
import CourseActions from "../courseDetailComps/CourseActions";
import CourseDetailHeaderDiv from "../courseDetailComps/CourseDetailHeaderDiv";
import CourseDetailPrimaryData from "../courseDetailComps/CourseDetailPrimaryData";
import CourseDetailSecondaryData from "../courseDetailComps/CourseDetailSecondaryData";

export type CourseDetailPrePageType = {
  selectedCourse: CourseType | undefined;
};
export default function CourseDetailPrePage(props: CourseDetailPrePageType) {
  const { selectedCourse } = props;
  const [s, ss] = useState(true);

  if (!s) return null;

  return (
    <LayoutMain
      className={
        "bg-primary-bg " +
        (selectedCourse && " fixed top-0 left-0 w-full h-full ")
      }
      headerClass="bg-rose-300"
    >
      <CourseDetailHeaderDiv>
        <CourseDetailPrimaryData course={selectedCourse}>
          {selectedCourse?.id && (
            <CourseActions
              course={selectedCourse}
              courseId={selectedCourse?.id}
            />
          )}
          <button onClick={() => ss(false)}>close</button>
          <CourseDetailSecondaryData course={selectedCourse} />
        </CourseDetailPrimaryData>
      </CourseDetailHeaderDiv>
      <div className="min-h-[400px]"></div>
    </LayoutMain>
  );
}
