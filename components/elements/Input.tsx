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
        ` flex items-start justify-startd bg-red-400d  flex-1 ${col}  gap-2 p-1 ` +
        className
      }
    >
      {text && (
        <label
          className="text-slate-600 text-[.9rem] whitespace-nowrap "
          htmlFor={name || text}
        >
          {text}
        </label>
      )}
      <input
        {...props}
        className="w-full min-w-[50px] p-1 px-2 ring-[2px]d border-b-2 rounded-lg ring-primary-main bg-transparentd "
        type={type || "text"}
        // type={'number'}
        name={name || text}
      />
    </div>
  );
}
