import { extendType, nonNull, objectType, stringArg } from "nexus";
import { Course } from "./course";
import { Learn } from "./learn";

export const CourseTrans = extendType({
  type: "Mutation",
  definition(t) {
    //buy course
    t.field("courseBuy", {
      type: Course,
      args: { courseId: nonNull(stringArg()) },
      resolve(par, { courseId }, { prisma, user }) {
        console.log("courseId", { courseId, user: user.sub });
        if (!user) return {};

        return prisma.course.update({
          where: { id: courseId },
          data: {
            students: {
              connect: {
                id: user.sub,
              },
            },
            learns: {
              create: {
                userId: user.sub,
              },
            },
          },
          select: {
            students: true,
          },
        });
      },
    }); // buy course

    //UnBuy course
    t.field("courseUnBuy", {
      type: Course,
      args: { courseId: nonNull(stringArg()) },
      resolve(par, { courseId }, { prisma, user }) {
        return prisma.course.update({
          where: { id: courseId },
          data: {
            students: {
              disconnect: { id: user.sub },
            },
          },
          select: {
            students: true,
          },
        });
      },
    }); // UnBuy course
  },
});
