import { getSession } from "@auth0/nextjs-auth0";
import { booleanArg, extendType, intArg, nonNull, stringArg } from "nexus";
import { Course } from "./course";

export const MyCoursesQuery = extendType({
  type: "Query",
  definition(t) {
    // my courses
    t.list.field("myCourses", {
      type: Course,
      args: {
        creatorId: nonNull(stringArg()),
      },
      resolve(par, { creatorId }, { prisma }) {
        return prisma.course.findMany({
          where: { creatorId },
        });
      },
    });

    // my course
    t.field("myCourse", {
      type: Course,
      args: { id: nonNull(stringArg()) },
      async resolve(par, { id }, { prisma, req, res, user }): Promise<any> {
        const creatorId = "auth0|63b5544bc7f88e767ac799d9";
        return await prisma.course.findFirst({
          where: { id, creatorId: user.sub },
        });
      },
    });
  },
});

export const CourseMutation = extendType({
  type: "Mutation",
  definition(t) {
    // add course
    t.field("addCourse", {
      type: Course,
      args: {
        creatorId: nonNull(stringArg()),
        title: nonNull(stringArg()),
        imageUrl: stringArg(),
        description: stringArg(),
        price: intArg(),
        free: booleanArg(),
        discount: intArg(),
        discountType: stringArg(),
        ratings: intArg(),
        language: stringArg(),
        duration: intArg(),
        level: intArg(),
      },
      resolve(par, args, { prisma }) {
        // return prisma.course.create({
        //     data:{}
        // })
        return prisma.course.create({
          data: args as any,
        });
      },
    }); // add course

    // delete course
    t.field("deleteCourse", {
      type: Course,
      args: { id: nonNull(stringArg()) },
      resolve(par, { id }, { prisma }) {
        return prisma.course.delete({
          where: { id },
          select: { id: true },
        });
      },
    }); // delete course

    // update course
    t.field("updateCourse", {
      type: Course,
      args: {
        id: nonNull(stringArg()),
        title: nonNull(stringArg()),
        imageUrl: stringArg(),
        description: stringArg(),
        price: intArg(),
        free: booleanArg(),
        discount: intArg(),
        discountType: stringArg(),
        ratings: intArg(),
        language: stringArg(),
        duration: intArg(),
        level: intArg(),
      },
      resolve(par, { id, ...data }, { prisma }) {
        return prisma.course.update({
          where: { id: id },
          data: data as any,
        });
      },
    });
  },
});
