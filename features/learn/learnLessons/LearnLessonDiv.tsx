import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export default function LearnLessonDiv({ children }: Props) {
  return (
    <div className="flex  flex-col max-h-[100%] overflow-auto">{children}</div>
  );
}
