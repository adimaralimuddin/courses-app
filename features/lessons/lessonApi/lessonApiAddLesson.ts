import gqlFetch from "../../api/gqlFetch";
import LessonType from "../LessonsTypes/LessonType";

export default async function lessonApiAddLesson(
  lessonData: LessonType
): Promise<LessonType> {
  return await gqlFetch(
    `mutation Mutation($moduleId: String!, $title: String!, $description: String!, $videoUrl: String!, $preview: Boolean!) {
  addLesson(moduleId: $moduleId, title: $title, description: $description, videoUrl: $videoUrl, preview: $preview) {
    id
    index
    title
  }
}
`,
    lessonData,
    "addLesson"
  );
}
