import React from "react";
import BtnLarge from "../../../../components/elements/BtnLarge";
import useCourseBuyer from "../../courseHooks/useCourseBuyer";

interface Props {
  courseId: string;
  className?: string;
}
export default function CourseBuyer({ courseId, className }: Props) {
  const { mutate } = useCourseBuyer(courseId);

  const onBuyHandler = () => {
    mutate(courseId);
  };

  return (
    <BtnLarge
      onClick={onBuyHandler}
      className={
        " bg-rose-400d bg-black bg-opacity-60 ring-rose-100 text-white " +
        className
      }
    >
      Buy Course
    </BtnLarge>
  );
}
