import dynamic from "next/dynamic";
import React from "react";
import LayoutMain from "../../../../components/layout/LayoutMain";
import useCourses from "../../courseHooks/useCourses";
import useCoursesPage from "../../courseHooks/useCoursesPage";
import CourseItem from "../courseItems/CourseItem";
import CourseListsDiv from "../courseListsComps/CourseListsDiv";
import CourseQuery from "../courseQueries/CourseQuery";
import CourseSidebar from "../courseSidebar/CourseSIdeBar";
import CoursePageLoader from "./CoursePageLoader";

const CourseDetailPrePage = dynamic(
  () => import("../../courseDetail/courseDetailPage/CourseDetailPrePage")
);

export default function CoursesPage() {
  const { data, onPrev, onNext, onQuery, isLoading } = useCourses();
  const { onSelect, selectedCourse } = useCoursesPage();

  console.log(`data`, data);

  return (
    <LayoutMain className={"bg-primary-bg"}>
      <div className="flex  ">
        <CourseSidebar onApply={onQuery} />
        <CourseQuery
          className="max-w-6xld dflex-3"
          onNext={onNext}
          onPrev={onPrev}
          onSearch={onQuery}
          hasNextPage={data?.hasNextPage}
          hasPrevPage={data?.hasPrevPage}
        >
          {isLoading && <CoursePageLoader />}

          <CourseListsDiv noMore={!!!data?.courses?.length}>
            {data?.courses?.map((course) => (
              <CourseItem onClick={onSelect} course={course} key={course.id} />
            ))}
          </CourseListsDiv>
        </CourseQuery>
      </div>

      {data?.courses && data?.courses?.length > 1 && selectedCourse && (
        <CourseDetailPrePage selectedCourse={selectedCourse} />
      )}
    </LayoutMain>
  );
}
