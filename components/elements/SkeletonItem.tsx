import React from "react";

export default function SkeletonItem() {
  return (
    <div className="flex flex-col gap-3">
      <div className="p-2 flex gap-2 rounded-lg  animate-pulse">
        <div className=" aspect-square w-[35px] bg-rose-200 rounded-full"></div>
        <div className="flex-1 py-1 flex flex-col gap-1">
          <div className="p-[.5rem] rounded-xl bg-rose-200 max-w-[300px]"></div>
          <div className="p-1 rounded-xl bg-rose-200 max-w-[100px]"></div>
        </div>
      </div>
    </div>
  );
}
