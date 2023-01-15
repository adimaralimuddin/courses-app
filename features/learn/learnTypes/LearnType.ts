import { CourseType } from "../../courses/courseTypes/CourseType";

export default interface LearnType {
  userId: string;
  courseId: string;
  done: boolean;
  currentLessonId?: string;
  doneLesson?: string[];
  createdAt?: Date;

  course: CourseType;
}
