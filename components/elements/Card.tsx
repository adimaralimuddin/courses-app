import React from "react";

interface Props {
  children: any;
  className?: string;
}

export default function Card({ children, className }: Props) {
  return (
    <div
      className={
        " bg-white p-3 rounded-xl flex-1 flex flex-col gap-2 " + className
      }
    >
      {children}
    </div>
  );
}
