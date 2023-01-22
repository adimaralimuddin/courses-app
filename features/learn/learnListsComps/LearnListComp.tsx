import React from "react";
import SkeletonItem from "../../../components/elements/SkeletonItem";
import { LearnQueryType } from "../learnTypes/LearnQueryType";
import LearnListQueryComp from "./LearnListQueryComp";
interface Props {
  list: string;
  children?: any;
  Adder?: any;
  state: LearnQueryType;
  onQuery: () => any;
  onLoadMore: () => any;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  optionList?: boolean;
}
export default function LearnListComp({
  children,
  list,
  Adder,
  state,
  onQuery,
  onLoadMore,
  hasNextPage,
  isFetchingNextPage,
  optionList,
}: Props) {
  return (
    <div className={"p-3 px-4 bg-indigo-50d flex-1   "}>
      <div className={"flex-1 flex flex-col w-full max-w-3xl mx-auto  "}>
        <div className="p-2 ">{Adder && Adder}</div>
        <div className="flex flex-col">
          <LearnListQueryComp
            optionList={optionList}
            list={list}
            state={state}
            onQuery={onQuery}
          />
          <div className="flex flex-col flex-1 gap-2 max-h-[700px]d overflow-y-auto">
            {children}
            {isFetchingNextPage && [0, 1].map((i) => <SkeletonItem key={i} />)}
            <div className="text-center">
              {hasNextPage ? (
                isFetchingNextPage ? (
                  <p>loading {list} ...</p>
                ) : (
                  <button onClick={onLoadMore}>Load More</button>
                )
              ) : (
                <div>
                  <p>No More {list?.[0]?.toUpperCase() + list?.slice(1)}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
