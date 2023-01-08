import React from "react";
import CourseEditorComp from "../../../components/featureComps/courseComps/courseEditorComps/CourseEditorComp";
import { CourseType } from "../../courses/courseTypes/CourseType";
import useMyCourseMutate from "../myCourseHooks/useMyCourseMutate";
interface Props {
  courseId: string | undefined;
}
export default function MyCourseUpdater({ courseId }: Props) {
  const { updateCourse } = useMyCourseMutate();
  const onDone = (courseData: CourseType, caller: any) => {
    updateCourse({ ...courseData, id: courseId }, { onSuccess: caller });
    console.log("to update course ", courseData);
  };
  return (
    <div className="p-2 ring-2 rounded-xl">
      <CourseEditorComp onDone={onDone} text="edit" />
    </div>
  );
}
