import React, { FormEvent, useState } from "react";
import BtnPrime from "../../../components/elements/BtnPrime";
import Card from "../../../components/elements/Card";
import Input from "../../../components/elements/Input";
import LoadingMessage from "../../../components/elements/LoadingMessage";
interface Props {
  onDone: (text: string) => any;
  isAdding: boolean;
  text: "Note" | "Qna";
}
export default function ListItemEditorComp({
  onDone,
  isAdding,
  text: text_,
}: Props) {
  const [text, setText] = useState("");
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onDone(text);
  };
  return (
    <div className="relative p-6">
      <h2>{text == "qna" ? "Ask A Related Qestion" : "Add A Note"} </h2>
      <form onSubmit={onSubmit} className="pt-4">
        <Input
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          text="text"
          autoFocus
        />
        <BtnPrime type="submit" className="mt-4">
          Submiting {text_}
        </BtnPrime>
      </form>
      {isAdding && (
        <LoadingMessage
          text={
            text_ == "Qna"
              ? "Submiting Asked Question . . ."
              : "Adding Note . . ."
          }
        />
      )}
    </div>
  );
}
