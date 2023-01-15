import React from "react";
import NoListsComp from "../../../components/elements/NoListsComp";
import SkeletonItem from "../../../components/elements/SkeletonItem";
import QnaListsDivComp from "../../../components/featureComps/qnaComps/qnaMainComps/QnaListsDivComp";
import QnaMainComp from "../../../components/featureComps/qnaComps/qnaMainComps/QnaMainComp";
import QnaQueryComp from "../../../components/featureComps/qnaComps/qnaMainComps/QnaQueryComp";
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

  if (!lesson?.id || isLoading) {
    return (
      <div>
        {[0, 1, 2, 3, 4].map((i) => (
          <SkeletonItem key={i} />
        ))}
      </div>
    );
  }
  return (
    <QnaMainComp Adder={<QnaAdder lessonId={lesson?.id} courseId={courseId} />}>
      <QnaQueryComp state={query.queryStates} onQuery={onQuery}>
        <QnaListsDivComp
          onLoadMore={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        >
          {data?.pages?.map((page) =>
            page.qnas?.map((qna: QnaType) => (
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
        </QnaListsDivComp>
      </QnaQueryComp>
    </QnaMainComp>
  );
}
