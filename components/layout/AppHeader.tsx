import React from "react";
import AppLogo from "./AppLogo";
import AppNav from "./AppNav";
import AppUserMenu from "./AppUserMenu";

export default function AppHeader({ className, Child1 }: any) {
  return (
    <div className={" w-full h-[clamp(60px,60px,60px)] " + className}>
      <div className=" max-w-7xl mx-auto flex flex-wrap p-3 gap-3 items-center ">
        <AppLogo />
        {Child1 && Child1}
        <AppNav />
        <AppUserMenu />
      </div>
    </div>
  );
}
