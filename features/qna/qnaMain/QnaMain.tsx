import React from "react";
import NoListsComp from "../../../components/elements/NoListsComp";
import SkeletonItem from "../../../components/elements/SkeletonItem";
import LearnListComp from "../../learn/learnListsComps/LearnListComp";

import useLearn from "../../learn/learnHooks/useLearn";
import QnaAdder from "../qnaEditors/QnaAdder";
import useQnaQueries from "../qnaHooks/useQnaQueries";
import QnaItem from "../qnaItems/QnaItem";
import QnaType from "../qnaTypes/QnaType";
interface Props {
  courseId: string;
}
export default function QnaMain({ courseId }: Props) {
  const { lesson } = useLearn(courseId);
  const query = useQnaQueries(courseId, lesson?.id);
  const {
    text,
    onQuery,
    fetchNextPage,
    data,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = query;

  return (
    <LearnListComp
      list="questions"
      Adder={<QnaAdder courseId={courseId} lessonId={lesson?.id} />}
      state={query.queryStates}
      onQuery={onQuery}
      onLoadMore={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
    >
      {isLoading && (
        <div>
          {[0, 1, 2, 3, 4].map((i) => (
            <SkeletonItem key={i} />
          ))}
        </div>
      )}
      {data?.pages?.map((page) =>
        page?.qnas?.map((qna: QnaType) => (
          <QnaItem
            courseId={courseId}
            qna={qna}
            key={qna.id}
            lessonId={lesson?.id}
            text={text}
          />
        ))
      )}
      {data?.pages?.length == 0 && <NoListsComp word="Questions" />}
    </LearnListComp>
  );
}
