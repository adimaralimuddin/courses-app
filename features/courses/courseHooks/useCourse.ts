import { useQuery } from "@tanstack/react-query";
import courseApiGetCourse from "../courseApi/courseApiGetCourse";
import { CourseType } from "../courseTypes/CourseType";

export default function useCourse(courseId: string) {
  const query = useQuery<CourseType, any>(["course", courseId], () =>
    courseApiGetCourse(courseId)
  );

  return { ...query };
}
