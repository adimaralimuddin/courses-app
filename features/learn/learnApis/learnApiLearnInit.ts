import gqlFetch from "../../api/gqlFetch";

export default function learnApiLearnInit(courseId: string | undefined) {
  return gqlFetch(
    `
   query Learn($courseId: String!) {
  learn(courseId: $courseId) {
    userId
    doneLesson
    done
    currentLessonId
    courseId
    course {
      description
      discount
      discountType
      duration
      free
      id
      imageUrl
      language
      level
      price
      ratings
      title
      creatorId
      modules {
        courseId
        duration
        id
        title
        lessons {
          description
          index
          moduleId
          preview
          title
          videoUrl
          id
        }
      }
    }
  }
}
    `,
    { courseId },
    "learn"
  );
}
