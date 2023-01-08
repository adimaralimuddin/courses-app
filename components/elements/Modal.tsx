import React from "react";
interface Props {
  open: boolean;
  children: any;
  set: (s: any) => any;
}
export default function Modal({ open, children: Children, set }: Props) {
  if (!open) return null;
  return (
    <div
      // onClick={() => set((p: boolean) => !p)}
      className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center"
    >
      <button
        onClick={() => set((p: boolean) => !p)}
        className="fixed right-5 top-5"
      >
        close
      </button>
      {Children}
    </div>
  );
}
