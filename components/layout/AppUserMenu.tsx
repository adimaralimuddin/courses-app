import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React from "react";
import UserType from "../../features/users/userTypes/UserType";
import Avatar from "../elements/Avatar";

export default function AppUserMenu() {
  const { user } = useUser();

  const userData: UserType | undefined = user
    ? {
        id: user?.sub || "",
        name: user?.name || "",
        email: user?.email || "",
        avatar: user?.picture || "",
      }
    : undefined;
  return (
    <div className="flex items-center gap-3">
      {user && <Avatar user={userData} />}
      {!user && <Link href="/api/auth/login"> login</Link>}
      {user && <Link href="/api/auth/logout"> logout</Link>}
    </div>
  );
}
