import React from "react";
import CourseItemLoader from "../courseItems/CourseItemLoader";
import CourseListsDiv from "../courseListsComps/CourseListsDiv";

export default function CoursePageLoader() {
  return (
    <CourseListsDiv noMore={false}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <CourseItemLoader key={i} />
      ))}
    </CourseListsDiv>
  );
}
