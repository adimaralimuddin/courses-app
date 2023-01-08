import React, { FormEvent, useState } from "react";
import Input from "../../../components/elements/Input";
import LessonType from "../LessonsTypes/LessonType";

interface Props {
  lesson?: LessonType;
  onSave: (data: LessonType) => any;
  text?: string;
}

export default function LessonEditor({ lesson, onSave, text }: Props) {
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
    <div>
      <form
        className="flex flex-col bg-slate-700 gap-2 p-3 "
        onSubmit={onSubmit}
      >
        <Input
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
          text="title"
        />
        <Input
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
          text="description"
        />
        <Input
          value={videoUrl}
          onChange={(e: any) => setVideoUrl(e.target.value)}
          text="videoUrl"
        />
        <select
          value={String(preview)}
          onChange={(e: any) => setPreview(e.target.value)}
          name=""
          id=""
        >
          <option value={"true"}>true</option>
          <option value={"false"}>false</option>
        </select>
        <button type="submit">{text || "done"}</button>
      </form>
    </div>
  );
}
