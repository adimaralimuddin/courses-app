import React, { ChangeEvent, ReactNode } from "react";
export type FilterType = [string, string | boolean | number];
export interface FilterItemType {
  text: string;
  name: string;
  options: FilterType[];
  value: string | number | boolean | Date;
  onChange: (value: string | number | boolean, text: string) => any;
}
interface Props {
  onChange: (val: string) => any;
  value: string | number;
  children: ReactNode;
  filterItems: FilterItemType[];
  onSearch: () => any | void;
  onNext: () => any;
  onPrev: () => any;
  className: string;
  filter: string | null;
  hasNextPage: boolean | undefined;
  hasPrevPage: boolean | undefined;
  setOpen: (b: any) => any;
}
export default function QueryComp({
  children,
  filterItems,
  onChange,
  value,
  onSearch,
  onNext,
  onPrev,
  className,
  filter,
  hasNextPage,
  hasPrevPage,
  setOpen,
}: Props) {
  function SelectItem({
    name,
    onChange,
    text,
    value,
    options,
  }: FilterItemType) {
    return (
      <div className="flex flex-col">
        <label htmlFor={name} className="px-1 leading-3">
          <small>{text}</small>
        </label>
        <select
          name={name}
          className="bg-transparent text-slate-600 font-semibold "
          value={value?.toString()}
          onChange={(e) => {
            onChange(e.target.value, text);
            onSearch();
          }}
        >
          {options?.map((option) => (
            <option value={option?.[0]} key={option?.[0]}>
              {option?.[1]}
            </option>
          ))}
        </select>
      </div>
    );
  }
  let time: any;

  return (
    <div className={" p-3  flex-1   " + className}>
      <div className="w-full  max-w-6xl min-h-[90vh] mx-auto ring-1d flex-1 flex flex-col">
        <div className="flex gap-2 flex-1d flex-wrap  p-3 ring-1d">
          <button
            className={
              "p-1 px-3 font-semibold bg-rose-50 m-1 mx-d2 rounded-2xl ring-2 ring-slate-600 "
            }
            onClick={() => setOpen((p: any) => !p)}
          >
            Fileters
          </button>
          <form
            className="flex overflow-hidden max-w-md flex-1 min-w-[150px] "
            onClick={(e) => {
              e.preventDefault();
              onSearch();
            }}
          >
            <input
              className=" text-slate-600d bg-rose-50 ring-2 ring-slate-600 text-whited rounded-full w-full outline-none bg-transparent overflow-auto m-1 p-1 px-3"
              placeholder={"search " + (filter ? "by " + filter : "")}
              value={value}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onChange(e.target.value);
                if (e.target.value?.trim() == "") {
                  onSearch();
                }
                if (time) {
                  clearTimeout(time);
                }
                time = setTimeout(() => {
                  if (e.target.value?.trim()?.slice(0, -1) == value) {
                    // onSearch();
                  }
                }, 1000);
              }}
              type="text"
            />
            <button
              type="submit"
              className="bg-primary-maind text-white px-3d ring-1d"
            ></button>
          </form>

          {filterItems?.map((item) => (
            <SelectItem
              options={item?.options}
              name={item?.name}
              text={item?.text}
              value={item?.value}
              onChange={item?.onChange}
              key={item?.text}
            />
          ))}
        </div>
        <div className="flex-1  flex flex-col ">{children}</div>
        <footer className="flex gap-3">
          {hasPrevPage && (
            <button className="p-2 bg-red-400 text-white" onClick={onPrev}>
              prev
            </button>
          )}
          {hasNextPage && (
            <button className="p-2 bg-red-400 text-white" onClick={onNext}>
              next
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
