import { CourseType } from "./CourseType";

export default interface CoursePageType {
  courses: CourseType[];
  hasPrevPage: boolean;
  hasNextPage: boolean;
}
