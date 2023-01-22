import React from "react";

export default function BtnLarge({ children, ...props }: any) {
  return (
    <button
      {...props}
      className={
        " ring-[3px] font-bold text-[1.4rem] rounded-full p-[5px] px-6 whitespace-nowrap min-h-[45px] min-w-[160px] text-center " +
        props?.className
      }
    >
      {children}
    </button>
  );
}
