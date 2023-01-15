import { getSession, Session } from "@auth0/nextjs-auth0";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../db";

type Props = {
  req: NextApiRequest;
  res: NextApiResponse;
};

export interface AuthType {
  nickname?: string;
  name?: string;
  picture?: string;
  updated_at?: string;
  email?: string;
  email_verified?: false;
  sub: string;
  sid: string;
}
export type Context = {
  prisma: PrismaClient;
  req: NextApiRequest;
  res: NextApiResponse;
  user: AuthType;
};
export async function createContext({ req, res }: Props): Promise<Context> {
  let user_ = { sub: "auth0|63c0e8173076de0e83751bc8" };
  const session = (await getSession(req, res)) as any;

  return {
    prisma,
    req,
    res,
    user: session?.user || user_,
  };
}
