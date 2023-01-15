import { useUser } from "@auth0/nextjs-auth0/client";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
// import courseApiQueryCourse from "../../courses/courseApi/courseApiQueryCourse";
import { CourseState } from "../../courses/courseStates/CourseState";
import { CourseType } from "../../courses/courseTypes/CourseType";
// import myCourseApiGetCourses from "../myCourseApis/myCourseApiGetCourses";
import myCourseApiQueryCourse from "../myCourseApis/myCourseApiQueryCourses";

export default function useMyCourses() {
  const { set, ...states } = CourseState((state) => state);
  const { user } = useUser();
  // const query = useQuery<CourseType[]>(["courses", user?.sub], () =>
  //   myCourseApiGetCourses(user?.sub)
  // );
  // const mycourses = useQuery(
  //   ["mycourses"],
  //   () => courseApiQueryCourse(states),
  //   {
  //     onSuccess: (x) => {
  //       console.log("success query --", x);
  //     },
  //   }
  // );

  const query: UseQueryResult<
    {
      courses: CourseType[];
      hasPrevPage: boolean;
      hasNextPage: boolean;
    },
    unknown
  > = useQuery(
    ["mycourses", states.cursor],
    () => myCourseApiQueryCourse(states),
    {
      onSuccess: (x) => {
        console.log("success my query --", x);
      },
    }
  );

  function onNext() {
    const newCursor =
      query?.data?.courses?.[query?.data?.courses?.length - 1]?.id;
    set({ cursor: newCursor, queryDirection: 1 });
  }
  function onPrev() {
    set({ cursor: query?.data?.courses?.[0]?.id, queryDirection: 0 });
  }
  function onSearch() {
    console.log("serach ", states);
    query.refetch();
  }
  function onQuery() {
    console.log("state", states);
    query.refetch();
  }
  return { ...query, onNext, onPrev, onSearch, onQuery };
}
