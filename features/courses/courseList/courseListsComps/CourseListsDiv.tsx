import React from "react";

export default function CourseListsDiv({
  children,
  noMore,
}: {
  children: any;
  noMore: boolean;
}) {
  return (
    <div className="grid grid-cols-2 flex-1 relative md:grid-cols-3 lg:grid-cols-4 gap-6 p-3 ">
      {children}
      {noMore && (
        <div className="bg-white bg-opacity-20 rounded-2xl flex items-center justify-center absolute top-0 left-0 h-full w-full  text-slate-500">
          <h2> No Courses Found!</h2>
        </div>
      )}
    </div>
  );
}
