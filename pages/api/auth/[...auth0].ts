import { handleAuth, handleCallback, Session } from "@auth0/nextjs-auth0";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const afterCallback = async (
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session,
  state: any
) => {
  const prisma = new PrismaClient();
  const user = session.user;
  console.log("auth user ", user);
  try {
    const userRecord = await prisma.user.findUnique({
      where: { id: user.sub },
    });
    if (!userRecord) {
      const newUser = await prisma.user.create({
        data: {
          id: user?.sub,
          name: user?.name,
          email: user?.email,
          avatar: user?.picture,
        },
      });
      console.log("new user created ", newUser);
    }
  } catch (error) {}
  return session;
};

export default handleAuth({
  async callback(req, res) {
    console.log("sucks!!!!!!!!!!!!!!!!!");
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error: any) {
      res.status(error.status || 500).end;
    }
  },
});
