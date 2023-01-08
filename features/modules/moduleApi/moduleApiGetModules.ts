import gqlFetch from "../../api/gqlFetch";
import ModuleType from "../ModuleTypes";

export default async function moduleApiGetModules(
  courseId: string
): Promise<ModuleType[]> {
  return await gqlFetch(
    `    query ExampleQuery($courseId: String!) {
  modules(courseId: $courseId) {
    courseId
    duration
    id
    title
  }
} `,
    { courseId },
    "modules"
  );
}
