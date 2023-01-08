import gqlFetch from "../../api/gqlFetch";
import LessonType from "../LessonsTypes/LessonType";

export default async function lessonApiUpdateLesson(
  lessonData: LessonType
): Promise<LessonType> {
  return await gqlFetch(
    `mutation Mutation( $title: String!, $description: String, $videoUrl: String, $preview: Boolean, $id: String!) {
  updateLesson( title: $title, description: $description, videoUrl: $videoUrl, preview: $preview, id: $id) {
    preview
    title
    videoUrl
    index
    moduleId
    id
    description
  }
}
`,
    lessonData,
    "updateLesson"
  );
}
