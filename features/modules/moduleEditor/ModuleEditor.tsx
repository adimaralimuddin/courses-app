import React, { FormEvent, useState } from "react";
import BtnPrime from "../../../components/elements/BtnPrime";
import Input from "../../../components/elements/Input";
import ModuleType from "../ModuleTypes";

interface Props {
  onSave: (moduleData: ModuleType, ...x: any) => any;
  title?: string;
  actionText?: string;
  loading: boolean;
  error: boolean;
  module?: ModuleType;
}

export default function ModuleEditor({
  onSave,
  title: title_ = "Add New Module",
  actionText = "add",
  loading,
  module,
  error,
}: Props) {
  const [title, setTitle] = useState(module?.title || "");
  const [duration, setDuration] = useState(module?.duration || "");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submited", { title, duration });
    onSave({ title, duration });
  };

  const onReset = () => {
    setTitle(module?.title || "");
    setDuration(module?.duration || "");
  };

  return (
    <div className="max-w-xl bg-whited p-6">
      <h2 className="pb-3 font-semiboldd">{title_}</h2>
      {loading && (
        <div className="animate-pulse px-2 ">
          <h3>
            module is being {actionText?.includes("add") ? "added" : "updated"}{" "}
            . . .
          </h3>
        </div>
      )}
      {error && (
        <div className="text-pink-500 px-2 ">
          <h3>Unable to update module, try again later!</h3>
        </div>
      )}
      <form
        onSubmit={onSubmit}
        className={
          "flex gap-2 flex-wrap flex-col p-2   " + (loading && " opacity-50")
        }
      >
        <Input
          disabled={loading}
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
          required
          placeholder="title"
          text="title"
        />
        <Input
          disabled={loading}
          value={duration}
          onChange={(e: any) => setDuration(e.target.value)}
          required
          placeholder="duration"
          text="duration"
        />
        <div className="flex justify-between gap-3">
          <BtnPrime disabled={loading} className=" mt-4 mr-auto" type="submit">
            {actionText} module
          </BtnPrime>
          <button onClick={onReset}>reset</button>
        </div>
      </form>
    </div>
  );
}
