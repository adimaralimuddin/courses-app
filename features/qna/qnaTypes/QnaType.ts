import { CourseType } from "../../courses/courseTypes/CourseType";
import LessonType from "../../lessons/LessonsTypes/LessonType";
import UserType from "../../users/userTypes/UserType";

export default interface QnaType {
  id: string;
  text: string;

  // replies:Reply

  user: UserType;
  userId: string;

  lesson: LessonType;
  lessonId: string;

  course: CourseType;
  courseId: string;

  createdAt?: Date;
  updatedAt?: Date;
}
