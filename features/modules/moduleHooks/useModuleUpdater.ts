import { useMutation, useQueryClient } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";

import ModuleType from "../ModuleTypes";

export default function useModuleUpdater() {
  const qClient = useQueryClient();

  const moduleUpdateQuery = useMutation(moduleUpdateQueryFn, {
    onSuccess: () => {
      qClient.invalidateQueries(["modules"]);
    },
  });

  return {
    ...moduleUpdateQuery,
  };
}

async function moduleUpdateQueryFn(args: ModuleType): Promise<ModuleType[]> {
  const queryString = `mutation UpdateModule($id: String!, $title: String!, $duration: String) {
  updateModule(id: $id, title: $title, duration: $duration) {
    courseId
    duration
    id
    title
  }
}`;
  return gqlFetch(queryString, args, "updateModule");
}
