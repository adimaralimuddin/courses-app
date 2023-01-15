import React from "react";
import { LearnQueryType } from "../../../../features/learn/learnTypes/LearnQueryType";
import LearnQueryComp from "../../learnComps/learnQueryComps/LearnQueryComp";
interface Props {
  children: any;
  state: LearnQueryType;
  onQuery: () => any;
}
export default function QnaQueryComp({ children, state, onQuery }: Props) {
  return (
    <div className="flex flex-col">
      <LearnQueryComp state={state} onQuery={onQuery} />
      <div className="flex-1">{children}</div>
    </div>
  );
}
