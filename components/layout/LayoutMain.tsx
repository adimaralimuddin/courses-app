import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React from "react";

export default function LayoutMain({ children }: any) {
  const { user } = useUser();
  return (
    <div className="bg-slate-800 tdext-white min-h-screen text-slate-300">
      <div className="flex ring-1 p-2 gap-3 justify-between ">
        <div className="flex gap-3 items-center">
          {user && <p>{user?.email}</p>}
          <small>{user?.sub}</small>
          {!user && <Link href="/api/auth/login"> login</Link>}
          {user && <Link href="/api/auth/logout"> logout</Link>}
        </div>
        <div className="flex items-center gap-3">
          {user && <Link href="/my-courses"> my courses</Link>}
        </div>
      </div>
      {children}
    </div>
  );
}
