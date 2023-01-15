import dynamic from "next/dynamic";
import React, { ReactNode, useState } from "react";
import useCoursesQuery from "../../../../features/courses/courseHooks/useCoursesQuery";
import { CourseState } from "../../../../features/courses/courseStates/CourseState";
import { CourseType } from "../../../../features/courses/courseTypes/CourseType";
import QueryComp from "../../../elements/QueryComp";
import CourseItemComp, {
  CourseItemLoader,
} from "../courseItemComps/CourseItemComp";
import CourseSidebarComp from "../courseQueryComps/CourseSidebarComp";
import CourseListsDivComp from "../courseSubComs/CourseListsDivComp";

interface Props {
  courses: CourseType[] | undefined;
  onQuery: () => any;
  onNext: () => any;
  onPrev: () => any;
  Adder?: ReactNode;
  hasNextPage: boolean | undefined;
  hasPrevPage: boolean | undefined;
  isLoading: boolean | undefined;
}

export default function CoursesPagesComp({
  courses,
  onQuery,
  onNext,
  onPrev,
  Adder,
  hasNextPage,
  hasPrevPage,
  isLoading,
}: Props) {
  const { set, text, filter, filterItems } = useCoursesQuery();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex  ">
      <CourseSidebarComp
        open={open}
        onApply={onQuery}
        state={CourseState((state) => state)}
      />
      <QueryComp
        className="max-w-6xld dflex-3"
        value={text}
        filter={filter}
        onChange={(text) => set({ text })}
        onNext={onNext}
        onPrev={onPrev}
        onSearch={onQuery}
        filterItems={filterItems}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
        setOpen={setOpen}
      >
        {Adder && Adder}
        {isLoading && (
          <CourseListsDivComp>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <CourseItemLoader key={i} />
            ))}
          </CourseListsDivComp>
        )}
        <CourseListsDivComp>
          {courses?.map((course) => (
            <CourseItemComp course={course} key={course.id} />
          ))}
        </CourseListsDivComp>
      </QueryComp>
      {/* </div> */}
    </div>
  );
}
