import { useMutation, useQueryClient } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import ModuleType from "../ModuleTypes";

export default function useModuleAdder() {
  const qClient = useQueryClient();
  const moduleAdderQuery = useMutation(addModuleQueryFn, {
    onSuccess: () => {
      qClient.invalidateQueries(["modules"]);
    },
  });

  return {
    ...moduleAdderQuery,
  };
}

async function addModuleQueryFn(data: ModuleType): Promise<ModuleType> {
  const queryString = `mutation AddModule($courseId: String!, $title: String!, $duration: String) {
    addModule(courseId: $courseId, title: $title, duration: $duration) {
        courseId
        duration
        id
        title
    }
    }`;
  return await gqlFetch(queryString, data, "addModule");
}
