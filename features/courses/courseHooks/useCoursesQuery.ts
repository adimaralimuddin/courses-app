import {
  FilterItemType,
  FilterType,
} from "../../../components/elements/QueryComp";
import { CourseState } from "../courseStates/CourseState";

const options: FilterType[] = [
  ["title", "title"],
  ["description", "description"],
];

export default function useCoursesQuery() {
  const { set, ...states } = CourseState((state) => state);
  const { filter, sort, order } = states;

  function reset() {
    set({
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
    });
  }

  const filterItems: FilterItemType[] = [
    {
      text: "filter",
      name: "filter",
      value: filter,
      options: options,
      onChange: (value: string | number | boolean) => {
        set({ filter: value?.toString() });
      },
    },
    {
      text: "order by",
      name: "order",
      value: order,
      options: options,
      onChange: (value: string | number | boolean) => {
        set({ order: value?.toString() });
      },
    },
    {
      text: "sort by",
      name: "sort",
      value: sort,
      options: [
        ["asc", "asc"],
        ["desc", "desc"],
      ],
      onChange: (value: string | number | boolean) => {
        set({ sort: value?.toString() });
      },
    },
  ];

  return {
    set,
    ...states,
    reset,
    filterItems,
    options,
  };
}
