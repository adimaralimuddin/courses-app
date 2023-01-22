import React, { FormEvent, useState } from "react";
import BtnPrime from "../../../components/elements/BtnPrime";
import Input from "../../../components/elements/Input";
import Select from "../../../components/elements/Select";
import LessonType from "../LessonsTypes/LessonType";

interface Props {
  lesson?: LessonType;
  onSave: (data: LessonType) => any;
  text?: string;
  isLoading: boolean;
}

export default function LessonEditor({
  lesson,
  onSave,
  text = "add",
  isLoading,
}: Props) {
  const [title, setTitle] = useState(lesson?.title || "");
  const [description, setDescription] = useState(lesson?.description || "");
  const [videoUrl, setVideoUrl] = useState(lesson?.videoUrl || "");
  const [preview, setPreview] = useState(lesson?.preview || "");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data: LessonType = {
      title,
      description,
      videoUrl,
      preview: preview === "true" ? true : false,
    };
    console.log("save ", data);
    onSave(data);
  };
  return (
    <div className="p-6">
      <h2>{text?.includes("update") ? "Updating" : "Add New"} Lesson</h2>
      {isLoading && (
        <h2 className="animate-pulse text-[1rem]">
          lesson is being {text?.includes("update") ? "updated" : "added"} ...
        </h2>
      )}
      <form
        className={
          "flex flex-col bg-slate-700d gap-2 p-3 " + (isLoading && "opacity-40")
        }
        onSubmit={onSubmit}
      >
        <Input
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
          text="title"
          disabled={isLoading}
        />
        <Input
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
          text="description"
          disabled={isLoading}
        />
        <Input
          value={videoUrl}
          onChange={(e: any) => setVideoUrl(e.target.value)}
          text="videoUrl"
          disabled={isLoading}
        />
        <Select
          value={String(preview)}
          onChange={(e: any) => setPreview(e.target.value)}
          text="preview"
          disabled={isLoading}
        >
          <option value={"true"}>true</option>
          <option value={"false"}>false</option>
        </Select>
        <div className="flex gap-3 px-1 pt-4">
          <BtnPrime disabled={isLoading} type="submit" className="mr-auto">
            {text} lesson{" "}
          </BtnPrime>
        </div>
      </form>
    </div>
  );
}
