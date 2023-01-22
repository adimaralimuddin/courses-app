import React, { ChangeEvent, KeyboardEvent, ReactNode } from "react";
import FilterSelectItem from "./FilterSelectItem";
import InputSearch from "./InputSearch";
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
          <InputSearch
            onChange={onChange}
            value={value}
            filter={filter}
            onSearch={onSearch}
          />

          {filterItems?.map((item) => (
            <FilterSelectItem
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
