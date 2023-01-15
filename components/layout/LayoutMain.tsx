import React, { ReactNode } from "react";
import AppLogo from "./AppLogo";
import AppNav from "./AppNav";
import AppUserMenu from "./AppUserMenu";
import LayoutFooter from "./LayoutFooter";

export default function LayoutMain({
  children,
  Child1,
  className,
  headerClass,
}: {
  children: ReactNode;
  Child1?: ReactNode;
  className?: string;
  headerClass?: string;
}) {
  return (
    <div className={" tdext-white min-h-screen " + className}>
      <header className={"  " + headerClass}>
        <div className=" flex p-3 gap-3 items-center max-w-7xl mx-auto bg-red-400d  ">
          <AppLogo />
          {Child1 && Child1}
          <AppNav />
          <AppUserMenu />
        </div>
      </header>
      {children}
      <LayoutFooter />
    </div>
  );
}
