import React, { HTMLInputTypeAttribute } from "react";

interface Field {
  type?: HTMLInputTypeAttribute | "text";
  text: String;
  name: string;
}

interface Props {
  fields: [Field];
  action?: string;
}
export default function Form({ fields, action }: Props) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // const values = [...formData.entries()];
    console.log("data form ", formData);
  };
  return (
    <div>
      <form
        className="flex flex-col gap-2 p-2 rounded-lg ring-1 max-w-md "
        onSubmit={handleSubmit}
      >
        {fields?.map((field, ind) => (
          <span className="flex-1 flex flex-col gap-2" key={ind}>
            <label htmlFor={field.name}>{field?.text}</label>
            <input
              name={field.name}
              type={field.type}
              className="p-1 px-2 rounded-lg"
            />
          </span>
        ))}
        <button type="submit">{action || "Add"}</button>
      </form>
    </div>
  );
}
