import { useQuery } from "@tanstack/react-query";
import moduleApiGetModules from "../moduleApi/moduleApiGetModules";
import ModuleType from "../ModuleTypes";

export default function useModules(courseId: string) {
  const query = useQuery<ModuleType[]>(["modules", courseId], () =>
    moduleApiGetModules(courseId)
  );
  return { ...query };
}
