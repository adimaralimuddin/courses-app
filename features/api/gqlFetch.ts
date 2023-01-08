import { gql, request } from "graphql-request";

export default async function gqlFetch(
  gql_: string,
  data?: Object,
  field?: string
): Promise<any> {
  const q = gql`
    ${gql_}
  `;
  const res = await request(
    process.env.NODE_ENV === "production"
      ? process.env.AUTH0_BASE_URL + "/api/graphql"
      : "http://localhost:3000/api/graphql",
    q,
    data
  );
  if (field) {
    return res[field];
  }
  return res;
}
