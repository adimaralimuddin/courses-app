import gqlFetch from "../../api/gqlFetch";
import ModuleType from "../ModuleTypes";

export default async function moduleApiAddModule(
  data: ModuleType
): Promise<ModuleType> {
  return await gqlFetch(
    `
        mutation AddModule($courseId: String!, $title: String!, $duration: String) {
    addModule(courseId: $courseId, title: $title, duration: $duration) {
        courseId
        duration
        id
        title
    }
    }
    `,
    data,
    "addModule"
  );
}
