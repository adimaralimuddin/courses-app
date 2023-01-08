import React from "react";
import CourseItemComp from "../../../components/featureComps/courseComps/courseItemComps/CourseItemComp";
import { CourseType } from "../../courses/courseTypes/CourseType";
import MyCourseDeleter from "../myCourseEditor/MyCourseDeleter";
import MyCourseUpdater from "../myCourseEditor/MyCourseUpdater";
interface Props {
  course: CourseType;
}
export default function MyCourseItem({ course }: Props) {
  return (
    <div>
      <CourseItemComp
        course={course}
        detailPath="/my-courses"
        Updater={<MyCourseUpdater courseId={course.id} />}
        Deleter={<MyCourseDeleter courseId={course.id} />}
      />
    </div>
  );
}
