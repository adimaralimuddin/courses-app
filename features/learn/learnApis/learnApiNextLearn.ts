import gqlFetch from "../../api/gqlFetch";

interface Args {
  courseId: string | undefined;
  currentLessonId: string;
}
export default async function learnApiNextLern(args: Args) {
  return gqlFetch(
    `
mutation LearnNext($courseId: String!, $currentLessonId: String!) {
  learnNext(courseId: $courseId, currentLessonId: $currentLessonId) {
    courseId
    userId
    currentLessonId
    doneLesson
    done
  }
}
`,
    args,
    "learnNext"
  );
}
