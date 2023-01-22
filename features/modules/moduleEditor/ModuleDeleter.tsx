import React from "react";
import useModuleDeleter from "../moduleHooks/useModuleDeleter";
interface Props {
  id: string | undefined;
  set: (val: boolean) => any;
}
export default function ModuleDeleter({ id, set }: Props) {
  const { mutate } = useModuleDeleter();
  const onRemove = () => {
    console.log("to delete", id);
    mutate(id);
    set(true);
  };
  return (
    <div>
      <button onClick={onRemove}>
        <small>Delete</small>
      </button>
    </div>
  );
}
