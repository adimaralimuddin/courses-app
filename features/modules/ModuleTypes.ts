import LessonType from "../lessons/LessonsTypes/LessonType";

export default interface ModuleType {
  id?: string;
  title: string;
  duration?: string;
  courseId?: string;
  lessons?: LessonType[];
}
