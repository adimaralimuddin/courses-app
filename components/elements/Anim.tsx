import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  open: boolean;
  state?: [string, string];
  className?: string;
}
export default function Anim({
  children,
  open,
  state = [" anim-mount ", " anim-unmount "],
  className = "",
}: Props) {
  const [end, setEnded] = useState(!open);
  useEffect(() => {
    if (open) {
      setEnded(false);
    }
  }, [open]);

  const isOpen = (a = "", b = "") => (open ? a : b);

  if (end) {
    return null;
  }

  return (
    <div
      onAnimationEnd={() => {
        if (!open) {
          setEnded(true);
        }
      }}
      className={" " + className + isOpen(` ${state?.[0]} `, ` ${state?.[1]} `)}
    >
      {children}
    </div>
  );
}
