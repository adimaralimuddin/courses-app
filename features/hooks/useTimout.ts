import { useEffect } from "react";

export default function useTimeout(time: number, callback: () => any) {
  useEffect(() => {
    const ret = setInterval(() => {
      callback?.();
    }, time);
    return () => {
      clearInterval(ret);
    };
  }, [time, callback]);
}
