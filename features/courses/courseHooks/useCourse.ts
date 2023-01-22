import { useQuery } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import { CourseType } from "../courseTypes/CourseType";

export default function useCourse(courseId: string) {
  const courseQuery = useQuery<CourseType, any>(
    ["course", courseId],
    () => courseQueryFn(courseId),
    {
      // enabled: false,
    }
  );

  return { ...courseQuery };
}

async function courseQueryFn(courseId: string): Promise<CourseType> {
  return await gqlFetch(
    `
query Course($courseId: String!) {
  course(id: $courseId) {
    id
    title
    imageUrl
    description
    price
    free
    discount
    discountType
    language
    duration
    level
    createdAt
     _count {
      students
      modules
      learn
    }
  }
}
    `,

    { courseId },
    "course"
  );
}
