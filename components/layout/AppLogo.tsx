import Link from "next/link";
import React from "react";

export default function AppLogo() {
  return (
    <div className="flex gap-3 items-center flex-1">
      <Link href="/">
        <h1 className="font-bold text-rose-400d text-[1.6rem] hover:text-rose-500">
          PreCode
        </h1>
      </Link>
    </div>
  );
}
