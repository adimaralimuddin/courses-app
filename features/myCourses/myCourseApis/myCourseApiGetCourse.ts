import gqlFetch from "../../api/gqlFetch";

export default async function myCourseApiGetCourse(id: string | undefined) {
  return gqlFetch(
    `
    query Query($id: String!) {
  myCourse(id: $id) {
    id
    free
    duration
    discountType
    discount
    description
    creatorId
    imageUrl
    language
    level
    price
    ratings
    title
  }
}
    `,
    { id },
    "myCourse"
  );
}
