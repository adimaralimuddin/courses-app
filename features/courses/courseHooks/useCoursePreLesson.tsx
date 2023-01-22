import { useQuery } from "@tanstack/react-query";
import gqlFetch from "../../api/gqlFetch";
import LessonType from "../../lessons/LessonsTypes/LessonType";

export default function useCoursePreLesson(courseId: string | undefined) {
  const prelesson = useQuery<LessonType>(
    ["prelesson", courseId],
    () => initPreLesson(courseId),
    {
      enabled: !!courseId,
      onSuccess: (x) => {
        console.log("done *********", x);
      },
    }
  );

  return { prelesson };
}

async function initPreLesson(courseId: string | undefined) {
  console.log("goooo");
  return gqlFetch(
    `
query InitLearn($courseId: String!) {
  initLearn(courseId: $courseId) {
    videoUrl
    title
    preview
    id
    description
    index
    moduleId
  }
}
        `,
    { courseId },
    "initLearn"
  );
}
