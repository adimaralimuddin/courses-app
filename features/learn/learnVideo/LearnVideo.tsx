import React from "react";
import useLearn from "../learnHooks/useLearn";
interface Props {
  courseId: string | undefined;
}
export default function LearnVideo({ courseId }: Props) {
  const { nextLesson, lesson } = useLearn(courseId);
  const onNext = () => {
    nextLesson();
  };

  return (
    <div className="bg-slate-200 h-[450px] dflex-1 relative">
      <iframe
        width="100%"
        height="100%"
        src={"https://www.youtube.com/embed/" + lesson?.videoUrl}
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen;"
        // allowfullscreen
      ></iframe>
      <div className="absolute text-white bg-slate-900 bottom-0 right-0">
        <button onClick={onNext}>next</button>
      </div>
    </div>
  );
}
