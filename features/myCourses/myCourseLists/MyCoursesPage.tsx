import React from "react";
import CoursesPagesComp from "../../../components/featureComps/courseComps/courseListsComps/CoursesPagesComp";
import LayoutMain from "../../../components/layout/LayoutMain";
import MyCourseAdder from "../myCourseEditor/MyCourseAdder";
import useMyCourses from "../myCourseHooks/useMyCourses";

export default function MyCoursesPage() {
  const { data, onQuery, onNext, onPrev, isLoading } = useMyCourses();

  return (
    <LayoutMain headerClass="bg-[#e0fbf5]d" className="bg-[#e0fbf5]">
      <CoursesPagesComp
        Adder={<MyCourseAdder />}
        courses={data?.courses}
        hasNextPage={data?.hasNextPage}
        hasPrevPage={data?.hasPrevPage}
        isLoading={isLoading}
        onQuery={onQuery}
        onNext={onNext}
        onPrev={onPrev}
      />
    </LayoutMain>
  );
}
