import React, { FormEvent, useState } from "react";
import Card from "../../../elements/Card";
import Input from "../../../elements/Input";
interface Props {
  onDone: (text: string) => any;
}
export default function NoteEditorComp({ onDone }: Props) {
  const [text, setText] = useState("");
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onDone(text);
  };
  return (
    <div>
      <Card>
        <form onSubmit={onSubmit}>
          <Input
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
            text="text"
          />
          <button type="submit">add</button>
        </form>
      </Card>
    </div>
  );
}
