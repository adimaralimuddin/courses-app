import { useQuery } from "@tanstack/react-query";
import courseApiGetCourses from "../courseApi/couseApiGetCourses";
import { CourseType } from "../courseTypes/CourseType";

export default function useCourses() {
  const query = useQuery<CourseType[]>(["courses"], courseApiGetCourses);
  return { ...query };
}
