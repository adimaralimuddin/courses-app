import React, { useState } from "react";
interface Props {
  state?: boolean;
  Header: any;
  children: any;
}
export default function Collapse({ state, Header, children }: Props) {
  const [state_, setState] = useState(state || false);
  const onToggle = () => {
    setState((s) => !s);
  };

  const Toggle = () => <button onClick={onToggle}>{state_ ? "^" : ">"}</button>;

  return (
    <div className="">
      <div>
        {Header && <Header Toggle={Toggle} />}
        {!Header && <Toggle />}
      </div>
      <div
        style={{ height: state_ ? "" : "0px" }}
        className={"ring-1 overflow-hidden "}
      >
        {children}
      </div>
    </div>
  );
}
