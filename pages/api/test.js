import { getSession } from "@auth0/nextjs-auth0";
import { PrismaClient } from "@prisma/client";

export default async function testApi(req, res) {
  const { user } = await getSession(req, res);
  console.log("user ", user);
  let ret = { no: true };
  const prisma = new PrismaClient();
  const x = await prisma.user.findMany();
  ret = x;
  // console.log("ret ", ret);
  res.json(ret);
}
