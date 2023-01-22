import React, { ReactNode } from "react";
import FilterSelectItem from "../../../components/elements/FilterSelectItem";
import InputSearch from "../../../components/elements/InputSearch";
import useCoursesQuery from "../courseHooks/useCoursesQuery";
import { CourseStateType } from "../courseStates/CourseState";

export type FilterType = [string, string | boolean | number];

export interface FilterItemType {
  text: string;
  name: string;
  options: FilterType[];
  value: string | number | boolean | Date;
  onChange: (value: string | number | boolean, text: string) => any;
}

export type CourseQueryProps = {
  children: ReactNode;
  onSearch: () => any | void;
  onNext: () => any;
  onPrev: () => any;
  className: string;
  hasNextPage: boolean | undefined;
  hasPrevPage: boolean | undefined;
};

export default function CourseQuery(props: CourseQueryProps) {
  const { set, open, text, filter, filterItems } = useCoursesQuery();
  const { hasNextPage, hasPrevPage, onPrev, onNext } = props;
  const { onSearch, children, className } = props;

  return (
    <div className={" p-3  flex-1   " + className}>
      <div className="w-full  max-w-6xl min-h-[90vh] mx-auto flex-1 flex flex-col">
        <div className="flex gap-2 flex-1d flex-wrap  p-3 ">
          <button
            className={
              "p-1 px-3 font-semibold bg-rose-50 m-1 mx-d2 rounded-2xl ring-2 ring-slate-600 "
            }
            onClick={() => set((p: CourseStateType) => ({ open: !p?.open }))}
          >
            Fileters
          </button>
          <InputSearch
            onChange={(val) => set({ text: val })}
            value={text}
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
        <footer className="flex gap-6 py-6 font-semibold text-lg ring-1d items-center justify-center">
          {hasPrevPage && (
            <button
              className="p-2 bg-red-400d hover:underline "
              onClick={onPrev}
            >
              Prev
            </button>
          )}
          {hasNextPage && (
            <button
              className="p-2 bg-red-400d hover:underline"
              onClick={onNext}
            >
              Next
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
