import React from "react";

export default function LoadingMessage({ text, className, ...props }: any) {
  return (
    <div
      {...props}
      className={
        "bg-white flex items-center justify-center p-6  absolute top-0 left-0 w-full h-[100%] " +
        className
      }
    >
      <h2 className="animate-pulse font-semibold text-slate-700">
        {text ? text : "Loading . . ."}
      </h2>
    </div>
  );
}
