import React from "react";

export default function CourseListsDivComp({ children }: { children: any }) {
  return <div className="flex flex-col gap-2 p-3">{children}</div>;
}
