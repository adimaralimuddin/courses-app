import gqlFetch from "../../api/gqlFetch";

export default function learnApiLearnInit(courseId: string | undefined) {
  return gqlFetch(
    `
  query Learn($courseId: String!) {
  learn(courseId: $courseId) {
    course {
      title
      duration
      modules {
        id
        title
        duration
        lessons {
          id
          index
          description
          title
          videoUrl
          preview
          moduleId
        }
      }
    }
    currentLessonId
    done
    doneLesson
    userId
    courseId
  }
}
    `,
    { courseId },
    "learn"
  );
}
