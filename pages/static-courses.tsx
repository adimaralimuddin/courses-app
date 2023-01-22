import { PrismaClient } from "@prisma/client";
import React from "react";
import LayoutMain from "../components/layout/LayoutMain";
import CourseItem from "../features/courses/courseList/courseItems/CourseItem";
import CourseListsDiv from "../features/courses/courseList/courseListsComps/CourseListsDiv";
import { CourseType } from "../features/courses/courseTypes/CourseType";

export default function staticCourses({ courses }: any) {
  console.log("client courses", JSON.parse(courses));
  const c = JSON.parse(courses);
  return (
    <div>
      static courses
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

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const courses = await prisma.course.findMany();
  console.log("courses", courses);
  return {
    props: {
      courses: JSON.stringify(courses),
    },
  };
}
