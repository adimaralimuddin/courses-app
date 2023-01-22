import create from "zustand";
import { CourseQueryType } from "../courseTypes/CourseQueryType";

export type CourseStateType = {
  set: any;
  open: boolean;
} & CourseQueryType;

export const CourseState = create<CourseStateType & CourseQueryType, []>(
  (set) => ({
    set,
    open: false,
    filter: "title",
    text: "",
    sort: "asc",
    cursor: null,
    queryDirection: 1,

    order: "title",
    language: null,
    category: "",
    price: undefined,
    duration: undefined,
    level: null,
    free: null,
  })
);
