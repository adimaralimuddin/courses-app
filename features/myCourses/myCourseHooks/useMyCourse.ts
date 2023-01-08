import { useQuery } from "@tanstack/react-query";
import { CourseType } from "../../courses/courseTypes/CourseType";
import myCourseApiGetCourse from "../myCourseApis/myCourseApiGetCourse";

export default function useMyCourse(id: string | undefined) {
  const query = useQuery<CourseType>(["mycourse", id], () =>
    myCourseApiGetCourse(id)
  );
  return {
    ...query,
  };
}
