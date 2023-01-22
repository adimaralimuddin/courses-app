import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Avatar from "../../../../components/elements/Avatar";
import { CourseType } from "../../../../features/courses/courseTypes/CourseType";
import CourseItemContent from "./CourseItemContent";
import CourseItemFooter from "./CourseItemFooter";
import CourseItemImage from "./CourseItemImage";

export default function CourseItem({
  course,
  onClick,
  className,
}: CourseItemProps) {
  const router = useRouter();
  const onClickHandler = () => {
    onClick(course);
  };
  // console.log("c", course);
  return (
    <Link
      onClick={onClickHandler}
      href={{
        pathname: router.pathname + "/" + course.id,
        query: {
          ...course?.creator,
          title: course?.title,
          imageUrl: course?.imageUrl,
          description: course?.description,
          price: course?.price,
          free: course?.free,
          level: course?.level,
          language: course?.language,
          duration: course?.duration,
          discount: course?.discount,
          discountType: course?.discountType,
        },
      }}
      prefetch={true}
    >
      <div
        className={
          "transition-all top-0 left-0 duration-150d  anim-mount  ring-2 flex-col overflow-hidden rounded-xl ring-rose-200d hover:ring-opacity-100 ring-slate-600 bg-pink-50d bg-rose-50d bg-white bg-opacity-60   flex gap-2d max-w-[300px]d h-full w-full cursor-pointer  ring-opacity-60 hover:ring-[2.3px]  " +
          className
        }
      >
        <CourseItemImage course={course} />
        <CourseItemContent course={course} />
        <CourseItemFooter course={course} />
      </div>
    </Link>
  );
}

export type CourseItemProps = {
  course: CourseType;
  onClick: (course: CourseType) => any;
  className?: string;
};

export type CourseItemCompsProps = {
  course: CourseType;
  className?: string;
};
