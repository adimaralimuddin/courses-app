import React from "react";
import SkeletonItem from "../../../elements/SkeletonItem";
interface Props {
  children: any;
  onLoadMore: () => any;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
}
export default function QnaListsDivComp({
  children,
  onLoadMore,
  hasNextPage,
  isFetchingNextPage,
}: Props) {
  return (
    <div className="flex flex-col flex-1 gap-2 max-h-[700px]d overflow-y-auto">
      {children}
      {isFetchingNextPage && [0, 1].map((i) => <SkeletonItem key={i} />)}
      <div className="text-center">
        {hasNextPage ? (
          isFetchingNextPage ? (
            <p>loading questions ...</p>
          ) : (
            <button onClick={onLoadMore}>Load More</button>
          )
        ) : (
          <div>
            <p>No More Questions</p>
          </div>
        )}
      </div>
    </div>
  );
}
