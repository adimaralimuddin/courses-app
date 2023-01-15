import React from "react";
// type Props = {
//   options: [string, string | number | boolean | undefined][] | string[];
//   className?: string;
//   text?: string;
//   type?: string;
//   name?: string;
// };

type Option = [string, string | number | boolean];

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
    <div className={" flex  flex-col flex-1  gap-1 p-1 " + className}>
      {text && (
        <label className="text-slate-600 text-[.9rem]" htmlFor={name || text}>
          {text}
        </label>
      )}
      <select
        {...props}
        className={`w-full min-w-[50px] p-1 px-2 ring-[${outline}px] rounded-lg ring-primary-main `}
        name={name || text}
      >
        {children}
      </select>
    </div>
  );
}
