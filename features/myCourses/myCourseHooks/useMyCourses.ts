import { useUser } from "@auth0/nextjs-auth0/client";
import { useQuery } from "@tanstack/react-query";
import { CourseType } from "../../courses/courseTypes/CourseType";
import myCourseApiGetCourses from "../myCourseApis/myCourseApiGetCourses";

export default function useMyCourses() {
  const { user } = useUser();
  const query = useQuery<CourseType[]>(["courses", user?.sub], () =>
    myCourseApiGetCourses(user?.sub)
  );
  return { ...query };
}
