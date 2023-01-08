import React, { FormEvent, useState } from "react";
import ModuleType from "../../../../features/modules/ModuleTypes";
import Card from "../../../elements/Card";

interface Props {
  onSave: (moduleData: ModuleType, ...x: any) => any;
}

export default function ModuleEditorComp({ onSave }: Props) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave({ title, duration });
  };
  return (
    <div>
      <Card>
        <form onSubmit={onSubmit}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            required
            name="title"
          />
          <input
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            type="text"
            required
            name="title"
          />
          <button type="submit">add</button>
        </form>
      </Card>
    </div>
  );
}
