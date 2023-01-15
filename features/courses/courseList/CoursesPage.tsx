import dynamic from "next/dynamic";
import React from "react";
// import CoursesPagesComp from "../../../components/featureComps/courseComps/courseListsComps/CoursesPagesComp";
import LayoutMain from "../../../components/layout/LayoutMain";
import useCourses from "../courseHooks/useCourses";

const CoursesPagesComp = dynamic(
  () =>
    import(
      "../../../components/featureComps/courseComps/courseListsComps/CoursesPagesComp"
    )
);

export default function CoursesPage() {
  const { data, onPrev, onNext, onQuery, isLoading } = useCourses();
  return (
    // <div>
    <LayoutMain className="bg-primary-bg">
      <CoursesPagesComp
        courses={data?.courses}
        hasNextPage={data?.hasNextPage}
        hasPrevPage={data?.hasPrevPage}
        isLoading={isLoading}
        onNext={onNext}
        onPrev={onPrev}
        onQuery={onQuery}
      />
    </LayoutMain>
    // </div>
  );
}
