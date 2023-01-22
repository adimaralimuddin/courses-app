import React, { ReactNode } from "react";
import AppHeader from "./AppHeader";
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
      <AppHeader className={headerClass} Child1={Child1} />
      {children}
      <LayoutFooter />
    </div>
  );
}
