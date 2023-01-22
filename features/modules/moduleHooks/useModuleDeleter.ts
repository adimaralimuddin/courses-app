import { useMutation, useQueryClient } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import ModuleType from "../ModuleTypes";

export default function useModuleDeleter() {
  const qClient = useQueryClient();

  const moduleDeleteQuery = useMutation(moduleDeleteQueryFn, {
    onSuccess: () => {},
  });

  return {
    ...moduleDeleteQuery,
  };
}

async function moduleDeleteQueryFn(
  id: string | undefined
): Promise<ModuleType> {
  const queryString = `mutation DeleteModule($id: String!) {
        deleteModule(id: $id) {
          id
        }
    }`;
  return gqlFetch(queryString, { id }, "deleteModule");
}
