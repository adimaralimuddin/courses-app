import { useQuery } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import ModuleType from "../ModuleTypes";

export default function useModules(courseId: string) {
  const modulesQuery = useQuery<ModuleType[]>(["modules", courseId], () =>
    modulesQueryFn(courseId)
  );
  return { ...modulesQuery };
}

async function modulesQueryFn(courseId: string): Promise<ModuleType[]> {
  const queryString = `query ExampleQuery($courseId: String!) {
  modules(courseId: $courseId) {
    courseId
    duration
    id
    title
  }
}`;
  return await gqlFetch(queryString, { courseId }, "modules");
}
