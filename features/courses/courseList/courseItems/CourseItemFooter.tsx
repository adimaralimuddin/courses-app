import React from "react";
import Avatar from "../../../../components/elements/Avatar";
import { CourseItemCompsProps } from "./CourseItem";

export default function CourseItemFooter({ course }: CourseItemCompsProps) {
  return (
    <div className="flex gap-2 items-center p-2">
      <Avatar user={course?.creator} />
      <small>{course?.creator?.name}</small>
    </div>
  );
}
