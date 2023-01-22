import React from "react";
import NoListsComp from "../../../components/elements/NoListsComp";
import SkeletonItem from "../../../components/elements/SkeletonItem";
import LearnListComp from "../../learn/learnListsComps/LearnListComp";

import useLearn from "../../learn/learnHooks/useLearn";
import NoteAdder from "../noteEditors/NoteAdder";
import useNoteQueries from "../noteHooks/useNoteQueries";
import NoteItem from "../noteItems/NoteItem";
import NoteType from "../noteTypes/NoteType";
interface Props {
  courseId: string;
}
export default function NoteMain({ courseId }: Props) {
  const { lesson } = useLearn(courseId);
  const query = useNoteQueries(courseId, lesson?.id);
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
      list="notes"
      Adder={<NoteAdder courseId={courseId} lessonId={lesson?.id} />}
      state={query.queryStates}
      onQuery={onQuery}
      onLoadMore={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      optionList={false}
    >
      {isLoading && (
        <div>
          {[0, 1, 2, 3, 4].map((i) => (
            <SkeletonItem key={i} />
          ))}
        </div>
      )}
      {data?.pages?.map((page) =>
        page?.notes?.map((note: NoteType) => (
          <NoteItem
            courseId={courseId}
            note={note}
            key={note.id}
            lessonId={lesson?.id}
            text={text}
          />
        ))
      )}
      {data?.pages?.length == 0 && <NoListsComp word="Notes" />}
    </LearnListComp>
  );
}
