import React from "react";
import useCourseSubscription from "../../courseHooks/useCourseSubscription";
import { CourseType } from "../../courseTypes/CourseType";
import CourseBuyer from "./CourseBuyer";
import CourseStarter from "./CourseStarter";

interface Props {
  course: CourseType | undefined;
  courseId: string;
  className?: string;
}
export default function CourseActions({ course, courseId, className }: Props) {
  const { isSubscribed, isLoading } = useCourseSubscription(courseId);

  if (isLoading) {
    return <div className="min-h-[45px] "></div>;
  }

  return (
    <div className={"flex items-center text-center min-h-[45px]  " + className}>
      {isSubscribed() ? (
        course && <CourseStarter course={course} />
      ) : (
        <CourseBuyer courseId={courseId} />
      )}
    </div>
  );
}
