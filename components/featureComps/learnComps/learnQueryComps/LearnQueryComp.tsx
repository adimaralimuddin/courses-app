import React, { ChangeEvent } from "react";
import { LearnQueryType } from "../../../../features/learn/learnTypes/LearnQueryType";

interface Props {
  state: LearnQueryType;
  onQuery: () => any;
}

export default function LearnQueryComp({ state, onQuery }: Props) {
  return (
    <div className="flex gap-1 py-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onQuery();
        }}
        className="ring-1d flex-1"
      >
        <input
          className="bg-transparent p-1 px-3 rounded-full w-full"
          type="text"
          placeholder="search"
          value={state.text}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            state?.set?.({ text: e.target.value });
          }}
        />
      </form>
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
      <select
        value={state.question}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          state?.set?.({ question: e.target.value });
        }}
        className="bg-transparent px-1 m-1 rounded-full"
        name=""
        id=""
      >
        <option value="all">all questions</option>
        <option value="my">my questions</option>
      </select>
    </div>
  );
}
