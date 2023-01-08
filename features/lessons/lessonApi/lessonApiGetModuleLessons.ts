import gqlFetch from "../../api/gqlFetch";
import LessonType from "../LessonsTypes/LessonType";

export default async function lessonApiGetModuleLessons(
  moduleId: string | undefined
): Promise<LessonType[]> {
  return await gqlFetch(
    `query ModuleLessons($moduleId: String!) {
  moduleLessons(moduleId: $moduleId) {
    title
    id
    index
  }
}`,
    { moduleId },
    "moduleLessons"
  );
}

// import gqlFetch from "../../api/gqlFetch";
// import LessonType from "../../lessons/LessonsTypes/LessonType";

// export default async function moduleApiGetModuleLessons(
//   moduleId: string | undefined
// ): Promise<LessonType[]> {
//   return await gqlFetch(
//     `query ModuleLessons($moduleId: String!) {
//   moduleLessons(moduleId: $moduleId) {
//     title
//     id
//     index
//   }
// }`,
//     { moduleId },
//     "moduleLessons"
//   );
// }
