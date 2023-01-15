import React, { FormEvent, useState } from "react";
import ModuleType from "../../../../features/modules/ModuleTypes";
import Input from "../../../elements/Input";

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
      <div className="max-w-xl bg-whited">
        <form onSubmit={onSubmit} className="flex gap-2 flex-wrap">
          <Input
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
            required
            placeholder="title"
          />
          <Input
            value={duration}
            onChange={(e: any) => setDuration(e.target.value)}
            required
            placeholder="duration"
          />
          <button type="submit">add</button>
        </form>
      </div>
    </div>
  );
}
