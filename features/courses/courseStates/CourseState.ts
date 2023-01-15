import create, { StateCreator } from "zustand";

export type CourseStateType = {
  set: any;
  cursor: string | null;
  queryDirection: 0 | 1;
  // hasNextPage: boolean | null;
  // hasPrevPage: boolean | null;

  //  query header states
  filter: string;
  text: string;
  order: string;
  sort: string;
  // sidebar states
  price: number | undefined;
  discount: number | undefined;
  ratings: number | undefined;
  duration: number | undefined;
  level: number | null;
  language: string | null;
  free: boolean | null;
};

export const CourseState = create<CourseStateType, []>((set) => ({
  set,
  filter: "title",
  text: "",
  sort: "asc",
  order: "title",
  price: undefined,
  discount: undefined,
  ratings: undefined,
  duration: undefined,
  level: null,
  language: null,
  free: null,
  cursor: null,
  queryDirection: 1,
  // hasNextPage: true,
  // hasPrevPage: null,
}));
