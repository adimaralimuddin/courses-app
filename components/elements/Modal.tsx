import React, { useState } from "react";
import Anim from "./Anim";
interface Props {
  open: boolean;
  children: any;
  set: (s: any) => any;
}
export default function Modal({ open, children: Children, set }: Props) {
  return (
    <Anim open={open}>
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-indigo-400 bg-opacity-50 z-50">
        <button
          onClick={() => set((p: boolean) => !p)}
          className="fixed right-5 top-5 text-black bg-white text-[1.4rem] font-semibold rounded-full aspect-square p-2d w-[clamp(50px,50px,50px)] shadow-xl transition duration-100 hover:scale-105 ring-2 ring-slate-500"
        >
          X
        </button>
        {Children}
      </div>
    </Anim>
  );
}
