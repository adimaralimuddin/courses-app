import React from "react";
import LayoutMain from "../../../../components/layout/LayoutMain";
import CourseDetailPrePage from "../../courseDetail/courseDetailPage/CourseDetailPrePage";
import CourseAdder from "../../courseEditors/CourseAdder";
import useCoursesPage from "../../courseHooks/useCoursesPage";
import useMyCourses from "../../courseHooks/useMyCourses";
import CourseItem from "../courseItems/CourseItem";
import CourseListsDiv from "../courseListsComps/CourseListsDiv";
import CourseQuery from "../courseQueries/CourseQuery";
import CourseSidebar from "../courseSidebar/CourseSIdeBar";
import CoursePageLoader from "./CoursePageLoader";

export default function MyCoursesPage() {
  const { data, onQuery, onNext, onPrev, isLoading } = useMyCourses();
  const { onSelect, selectedCourse } = useCoursesPage();
  return (
    <LayoutMain headerClass="bg-[#e0fbf5]" className={"bg-[#e0fbf5] "}>
      <div className="flex  ">
        <CourseSidebar onApply={onQuery} />
        <CourseQuery
          className="max-w-6xld dflex-3"
          onNext={onNext}
          onPrev={onPrev}
          onSearch={() => {
            console.log("hello people hahah");
            onQuery();
          }}
          hasNextPage={data?.hasNextPage}
          hasPrevPage={data?.hasPrevPage}
        >
          my coures permanent
          <CourseAdder />
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
