export type LearnQueryType = {
  set: any;
  text: string;
  sort: "latest" | "oldest";
  lesson: "all" | "current";
  list: "all" | "my";
};
