export interface CourseQueryType {
  // filters
  filter: string;
  text: string;
  order: string;
  sort: string;
  cursor: string | null;
  queryDirection: number;

  // properties
  price: number | undefined;
  free: boolean | null;
  language: string | null;
  category: string | null;
  duration: number | undefined;
  level: number | null;
}
