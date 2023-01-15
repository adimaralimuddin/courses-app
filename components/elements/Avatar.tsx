import Image from "next/image";
import React from "react";
import UserType from "../../features/users/userTypes/UserType";

interface Props {
  user: UserType | undefined;
}
export default function Avatar({ user }: Props) {
  return (
    <div className="rounded-full ring-2d overflow-hidden aspect-square h-[35px] min-h-[35px] min-w-[35px] bg-rose-500 text-white flex flex-col">
      {user?.avatar && <img src={user.avatar} />}
    </div>
  );
}
