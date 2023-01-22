import React, { useEffect, useState } from "react";
import LayoutMain from "../components/layout/LayoutMain";
import CourseItem from "../features/courses/courseList/courseItems/CourseItem";
import CourseListsDiv from "../features/courses/courseList/courseListsComps/CourseListsDiv";
import { CourseType } from "../features/courses/courseTypes/CourseType";

export default function DynamicCourses() {
  const [c, sc] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const res = await fetch("/api/test");
    const d = await res.json();
    console.log("data courses ", d);
    sc(d);
  };
  return (
    <div>
      dynamic-courses
      <LayoutMain>
        <CourseListsDiv noMore={false}>
          {c?.map((course: CourseType) => (
            <CourseItem onClick={() => {}} course={course} key={course.id} />
          ))}
        </CourseListsDiv>
      </LayoutMain>
    </div>
  );
}
