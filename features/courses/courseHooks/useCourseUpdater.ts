import { useMutation, useQueryClient } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import { CourseType } from "../courseTypes/CourseType";

export default function useCourseUpdater() {
  const qClient = useQueryClient();

  const courseUpdaterQuery = useMutation(courseUpdaterQueryFn, {
    onSuccess: () => {
      alert("updated");
    },
  });

  return {
    ...courseUpdaterQuery,
  };
}

async function courseUpdaterQueryFn(courseData: CourseType) {
  const queryString = `mutation UpdateCourse($id: String!, $title: String!, $imageUrl: String, $description: String, $price: Int, $free: Boolean, $discount: Int, $discountType: String, $level: Int, $language: [String]!) {
  updateCourse(id: $id, title: $title, imageUrl: $imageUrl, description: $description, price: $price, free: $free, discount: $discount, discountType: $discountType, level: $level, language: $language) {
    title
    price
    level
    language
    imageUrl
    free
    duration
    discountType
    discount
    description
    creatorId
    createdAt
  }
}`;
  return await gqlFetch(queryString, courseData, "updateCourse");
}
