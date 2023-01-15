import React from "react";
import NoListsComp from "../../../components/elements/NoListsComp";
import NoteListsDivComp from "../../../components/featureComps/noteComps/noteMainComps/NoteListsDivComp";
import NoteMainComp from "../../../components/featureComps/noteComps/noteMainComps/NoteMainComp";
import NoteQueryComp from "../../../components/featureComps/noteComps/noteMainComps/NoteQueryComp";
import useLearn from "../../learn/learnHooks/useLearn";
import NoteAdder from "../noteEditors/NoteAdder";
import useNotes from "../noteHooks/useNotes";
import NoteItem from "../noteItems/NoteItem";
interface Props {
  courseId: string;
}
export default function NoteMain({ courseId }: Props) {
  const { lesson } = useLearn(courseId);
  const { data: notes } = useNotes(lesson?.id);

  if (!lesson?.id) {
    return <div>loadding notes. . .</div>;
  }

  return (
    <NoteMainComp
      Adder={<NoteAdder courseId={courseId} lessonId={lesson?.id} />}
    >
      <NoteQueryComp>
        <NoteListsDivComp>
          {notes?.map((note) => (
            <NoteItem note={note} key={note.id} lessonId={lesson?.id} />
          ))}
          {notes?.length == 0 && <NoListsComp text="No Notes Yet!" />}
        </NoteListsDivComp>
      </NoteQueryComp>
    </NoteMainComp>
  );
}
