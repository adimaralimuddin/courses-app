import gqlFetch from "../../api/gqlFetch";

export default async function courseApiGetCourses() {
  return await gqlFetch(
    ` 
 query ExampleQuery {
  courses {
    creatorId
    description
    discount
    discountType
    duration
    free
    imageUrl
    level
    language
    price
    ratings
    title
    id
  }
}

`,
    undefined,
    "courses"
  );
}
