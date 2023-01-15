import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React from "react";

export default function AppNav() {
  const { user } = useUser();
  return (
    <ul className="flex gap-4 items-center text-[1.1rem] px-6">
      <li className=" text-rose-400d font-semibold hover:text-rose-500">
        {
          <Link href="/courses" prefetch={false}>
            Courses
          </Link>
        }
      </li>
      <li className=" text-rose-400d font-semibold hover:text-rose-500">
        {user && (
          <Link href="/my-courses" prefetch={false}>
            My Course
          </Link>
        )}
      </li>
    </ul>
  );
}
