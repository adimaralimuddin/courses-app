import { useEffect } from "react";
import { FilterItemType } from "./QueryComp";

export default function FilterSelectItem({
  name,
  onChange,
  text,
  value,
  options,
}: FilterItemType) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="px-1 leading-3">
        <small>{text}</small>
      </label>
      <select
        name={name}
        className="bg-transparent text-slate-600 font-semibold "
        value={value?.toString()}
        onChange={(e) => {
          onChange(e.target.value, text);
        }}
      >
        {options?.map((option) => (
          <option value={option?.[0]} key={option?.[0]}>
            {option?.[1]}
          </option>
        ))}
      </select>
    </div>
  );
}
