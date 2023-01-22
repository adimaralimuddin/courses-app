import React, { ChangeEvent } from "react";

export type InputSearchProps = {
  onSearch: () => any;
  value: string | number;
  onChange: (val: string) => any;
  filter?: string | null;
  className?: string;
};

export default function InputSearch({
  onSearch,
  value,
  filter,
  onChange,
  className = " bg-rose-50",
}: InputSearchProps) {
  let time: any;

  return (
    <form
      className="flex overflow-hidden max-w-md flex-1 min-w-[150px] "
      onClick={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <input
        className={
          " text-slate-600d  ring-2 ring-slate-600 text-whited rounded-full w-full outline-none bg-transparent overflow-auto m-1 p-1 px-3 " +
          className
        }
        placeholder={"search " + (filter ? "by " + filter : "")}
        value={value}
        onKeyUp={(e: any) => {
          const val = e.target?.value?.trim();
          if (val == "") {
            onSearch();
          }
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value);
          if (e.target.value?.trim() == "") {
            onSearch();
          }
          console.log("time ", time);
          if (time) {
            clearTimeout(time);
          }
          time = setTimeout(() => {
            if (e.target.value?.trim()?.slice(0, -1) == value) {
              onSearch();
            }
          }, 300);
        }}
        type="text"
      />
      <button
        type="submit"
        className="bg-primary-maind text-white px-3d ring-1d"
      ></button>
    </form>
  );
}
