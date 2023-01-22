import React from "react";

export default function BtnPrime(props: any) {
  return (
    <button
      {...props}
      className={
        " rounded-full ring-2 px-6 p-1 min-w-[100px] bg-green-200 text-whited text-black ring-black text-[1.1rem] font-semibold hover:bg-green-300 disabled:cursor-not-allowed " +
        props?.className
      }
    >
      {props?.children}
    </button>
  );
}
