import { CourseType } from "../../courses/courseTypes/CourseType";
import LessonType from "../../lessons/LessonsTypes/LessonType";
import UserType from "../../users/userTypes/UserType";

export default interface NoteType {
  id: string;
  text: string;

  user: UserType;
  userId: string;

  lesson: LessonType;
  lessonId: string;

  course: CourseType;
  courseId: string;

  createdAt?: Date;
  updatedAt?: Date;
}
