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
  const {
    filter,
    text,
    sort,
    order,
    price,
    discount,
    ratings,
    duration,
    level,
    language,
    free,
  } = states;

  const filterItems: FilterItemType[] = [
    {
      text: "filter",
      name: "filter",
      value: filter,
      options: options,
      onChange: (value: string | number | boolean) => {
        console.log("sort", value);
        set({ filter: value?.toString() });
      },
    },
    {
      text: "order by",
      name: "order",
      value: order,
      options: options,
      onChange: (value: string | number | boolean) => {
        console.log("order", value);
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
        console.log("sort", value);
        set({ sort: value?.toString() });
      },
    },
  ];

  return {
    set,
    ...states,
    filterItems,
    options,
  };
}
