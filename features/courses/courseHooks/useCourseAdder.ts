import {
  Updater,
  useMutation,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import CoursesPage from "../courseList/coursesPage/CoursesPage";
import { CourseState } from "../courseStates/CourseState";
import CoursePageType from "./../../courses/courseTypes/CoursePageType";
import { CourseType } from "./../../courses/courseTypes/CourseType";

export default function useMyCourseAdder() {
  const qClient = useQueryClient();
  const { set, ...states } = CourseState((state) => state);
  const { cursor, filter, sort, order } = states;
  const courseAdderQuery = useMutation(courseAdderQueryFn, {
    onSuccess: (newCourse) => {
      console.log("added", newCourse);
      qClient.invalidateQueries(["courses"]);
      qClient.setQueryData(
        ["mycourses", cursor, filter, sort, order],
        (coursePage: any) => {
          coursePage.courses = [...coursePage?.courses, newCourse];
          return coursePage;
        }
      );
    },
    onError(err) {
      console.log(`error usecoars adder`, err);
    },
  });

  return {
    ...courseAdderQuery,
  };
}

async function courseAdderQueryFn(course: CourseType): Promise<CourseType> {
  const queryString = `mutation AddCourse(
      $title: String!
      $imageUrl: String
      $description: String
      $price: Int
      $free: Boolean
      $discount: Int
      $discountType: String
    
      $language: [String]!
      $duration: Int
      $level: Int
    ) {
      addCourse(
        title: $title
        imageUrl: $imageUrl
        description: $description
        price: $price
        free: $free
        discount: $discount
        discountType: $discountType
     
        language: $language
        duration: $duration
        level: $level
      ) {
        description
        creatorId
        creator {
          about
          avatar
          email
          id
          name
        }
        discount
        discountType
        duration
        free
        id
        language
        level
        price
        title
        imageUrl
      }
    }`;

  return await gqlFetch(queryString, course, "addCourse");
}
