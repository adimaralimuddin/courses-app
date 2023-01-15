import React from "react";

export default function CourseListsDivComp({ children }: { children: any }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3 ">
      {children}
    </div>
  );
}
