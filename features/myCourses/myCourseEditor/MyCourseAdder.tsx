import React from "react";
import CourseEditorComp from "../../../components/featureComps/courseComps/courseEditorComps/CourseEditorComp";
import { CourseType } from "../../courses/courseTypes/CourseType";
import useMyCourseMutate from "../myCourseHooks/useMyCourseMutate";

export default function MyCourseAdder() {
  const { addCourse } = useMyCourseMutate();
  const onDone = (courseData: CourseType, caller: any) => {
    addCourse(courseData, { onSuccess: caller });
  };
  return (
    <div className="ring-2 rounded-xl p-1">
      <CourseEditorComp onDone={onDone} />
    </div>
  );
}
