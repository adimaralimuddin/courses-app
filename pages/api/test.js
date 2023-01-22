import { getSession } from "@auth0/nextjs-auth0";
import { prisma, PrismaClient } from "@prisma/client";

export default async function testApi(req, res) {
  // const { user } = await getSession(req, res);
  // console.log("user ", user);
  let id = "clchntkv00001u9ds0uyyw0t1";
  let userId = "google-oauth2|109038776084448622806";
  let ret = { no: true };
  const prisma = new PrismaClient();

  const x = await prisma.course.create({
    data: { title: "hello", creatorId: userId },
  });

  // const x = await prisma.learn.create
  // const x = await prisma.course.findUnique({
  //   where: { id },
  //   select: {
  //     title: true,
  //     students: {
  //       where: { id: userId },
  //       select: {
  //         id: true,
  //         name: true,
  //       },
  //     },
  //   },
  // });

  ret = x;
  console.log("ret ", ret);
  res.json(ret);
}
