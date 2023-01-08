import React from "react";
// type Props = {
//   type?: string;
//   text?: string;
//   name?: string;
//   className?: string;
//   value?: any;
//   onChange?: any;
// };
export default function Input({ text, name, type, className, ...props }: any) {
  return (
    <div className={" flex flex-col flex-1 gap-2 p-2 " + className}>
      {text && <label htmlFor={name || text}>{text}</label>}
      <input
        {...props}
        className="p-1 px-2"
        type={type || "text"}
        name={name || text}
      />
    </div>
  );
}
