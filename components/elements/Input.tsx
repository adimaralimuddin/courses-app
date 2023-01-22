import React from "react";

export default function Input({
  text,
  name,
  type,
  className,
  col = " flex-col ",
  ...props
}: any) {
  return (
    <div
      className={
        ` flex items-start justify-startd bg-red-400d  flex-1 ${col}  gap-2  ` +
        className
      }
    >
      {text && (
        <label
          className="text-slate-600 text-[1.1rem] whitespace-nowrap "
          htmlFor={name || text}
        >
          {text}
        </label>
      )}
      <input
        {...props}
        className="w-full disabled:cursor-not-allowed min-w-[50px] p-2 px-3 ring-[2px]d border-b-2d border-2 rounded-xl ring-primary-main bg-transparentd "
        type={type || "text"}
        name={name || text}
      />
    </div>
  );
}
