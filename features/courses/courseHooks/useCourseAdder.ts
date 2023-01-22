import { useMutation, useQueryClient } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import { CourseType } from "./../../courses/courseTypes/CourseType";

export default function useMyCourseAdder() {
  const qClient = useQueryClient();
  const courseAdderQuery = useMutation(courseAdderQueryFn, {
    onSuccess: (newCourse) => {
      console.log("added", newCourse);
      // qClient.invalidateQueries(["courses"]);
      // qClient.setQueryData(["my-courses"], (courses: CourseType[]) => {
      //   return courses ? [] : [];
      // });
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
