import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { createContext } from "../../graphql/context";
import { schema } from "../../graphql/schema";

const Cors = require("micro-cors");

const cors = Cors();
const apolloServer = new ApolloServer({
  schema,
  context: createContext,
});

const startServer = apolloServer.start();
export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    // path: process.env.AUTH0_BASE_URL + "/api/graphql",
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
