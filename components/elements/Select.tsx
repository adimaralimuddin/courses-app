import React from "react";

export default function Select({
  options,
  text,
  type,
  className,
  name,
  children,
  outline = 2,
  ...props
}: any) {
  return (
    <div className={" flex  flex-col flex-1  gap-2  " + className}>
      {text && (
        <label className="text-slate-600 text-[1.1rem]" htmlFor={name || text}>
          {text}
        </label>
      )}
      <select
        {...props}
        className={`w-full min-w-[50px] p-2 px-3 border-2 rounded-xl  ring-primary-maind outline-slate-700 `}
        name={name || text}
      >
        {children}
      </select>
    </div>
  );
}
