import { useMutation, useQueryClient } from "@tanstack/react-query";
import myCourseApiAddCourse from "../myCourseApis/myCourseApiAddCourse";
import myCourseApiRemoveCourse from "../myCourseApis/myCourseApiRemoveCourse";
import myCourseApiUpdateCourse from "../myCourseApis/myCourseApiUpdateCourse";

export default function useMyCourseMutate() {
  const qClient = useQueryClient();
  const add = useMutation(myCourseApiAddCourse, {
    onSuccess: (newCourse) => {
      console.log("added", newCourse);
      qClient.invalidateQueries(["courses"]);
    },
  });

  const remove = useMutation(myCourseApiRemoveCourse, {
    onSuccess: () => {
      qClient.invalidateQueries(["courses"]);
    },
  });

  const update = useMutation(myCourseApiUpdateCourse, {
    onSuccess: () => {},
  });

  return {
    addCourse: add.mutate,
    updateCourse: update.mutate,
    removeCourse: remove.mutate,
  };
}
