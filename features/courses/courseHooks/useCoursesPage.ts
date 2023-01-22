import { useQueryClient } from "@tanstack/react-query";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CourseType } from "../courseTypes/CourseType";

export default function useCoursePage() {
  // const router = useRouter();
  const qClient = useQueryClient();

  const [selectedCourse, setSelectedCourse] = useState<CourseType | undefined>(
    undefined
  );

  useEffect(() => {
    return () => setSelectedCourse(undefined);
  }, []);

  const onSelect = (course: CourseType) => {
    // setSelectedCourse(course);

    qClient.setQueryData(["course", course.id], () => {
      return course;
    });
    // router.push({
    //   pathname: router.pathname + "/" + course.id,
    //   query: {
    //     ...course?.creator,
    //     title: course?.title,
    //     imageUrl: course?.imageUrl,
    //     description: course?.description,
    //     price: course?.price,
    //     free: course?.free,
    //     level: course?.level,
    //     language: course?.language,
    //     duration: course?.duration,
    //     discount: course?.discount,
    //     discountType: course?.discountType,
    //   },
    // });
  };

  return {
    onSelect,
    selectedCourse,
    setSelectedCourse,
  };
}
