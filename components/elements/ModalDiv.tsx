import React from "react";

export default function ModalDiv(props: any) {
  return (
    <div
      {...props}
      className={
        " bg-white  rounded-2xl overflow-hidden shadow-lg ring-2 ring-rose-100d ring-green-200d ring-slate-600 w-full max-w-xl " +
        props?.className
      }
    >
      {props?.children}
    </div>
  );
}
