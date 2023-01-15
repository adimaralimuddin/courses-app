import create from "zustand";
import LessonType from "../../lessons/LessonsTypes/LessonType";

export interface LearnStateType {
  set: (partial: any, replace?: boolean | undefined) => void;
  // currentLessonId: string | null;
  lastLessonId: string | null;
  lesson: LessonType | null;
  lessons: LessonType[];
}

const LearnState = create<LearnStateType>((set, get) => ({
  set: set,
  // currentLessonId: null,
  lastLessonId: null,
  lesson: null,
  lessons: [],
}));

export default LearnState;
