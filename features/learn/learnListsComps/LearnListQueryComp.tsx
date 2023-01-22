import React, { ChangeEvent } from "react";
import InputSearch from "../../../components/elements/InputSearch";
import { LearnQueryType } from "../learnTypes/LearnQueryType";

interface Props {
  state: LearnQueryType;
  onQuery: () => any;
  list: string;
  optionList?: boolean;
}

export default function LearnListQueryComp({
  state,
  onQuery,
  list,
  optionList = true,
}: Props) {
  return (
    <div className="flex gap-1 py-2">
      <InputSearch
        className=" bg-transparent ring-0"
        onSearch={onQuery}
        value={state.text}
        filter=""
        onChange={(val: string) => {
          state?.set?.({ text: val });
        }}
      />

      <select
        value={state.sort}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          state?.set?.({ sort: e.target.value });
        }}
        className="bg-transparent px-1 m-1 rounded-full"
        name=""
        id=""
      >
        <option value="latest">latest</option>
        <option value="oldest">oldest</option>
      </select>
      <select
        value={state.lesson}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          state?.set?.({ lesson: e.target.value });
        }}
        className="bg-transparent px-1 m-1 rounded-full"
        name=""
        id=""
      >
        <option value="current">current lesson</option>
        <option value="all">all lesson</option>
      </select>
      {optionList && (
        <select
          value={state.list}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            state?.set?.({ list: e.target.value });
          }}
          className="bg-transparent px-1 m-1 rounded-full"
          name=""
          id=""
        >
          <option value="all">all {list}</option>
          <option value="my">my {list}</option>
        </select>
      )}
    </div>
  );
}
