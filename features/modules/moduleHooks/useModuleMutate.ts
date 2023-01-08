import { useMutation, useQueryClient } from "@tanstack/react-query";
import moduleApiAddModule from "../moduleApi/moduleApiAddModule";

export default function useModuleMutate() {
  const qClient = useQueryClient();
  const add = useMutation(moduleApiAddModule, {
    onSuccess: () => {
      qClient.invalidateQueries(["modules"]);
    },
  });

  return {
    addModule: add.mutate,
  };
}
