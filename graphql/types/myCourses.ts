import { getSession } from "@auth0/nextjs-auth0";
import { booleanArg, extendType, intArg, nonNull, stringArg } from "nexus";
import { Course, CoursePage } from "./course";

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
    }); // my course

    // query courses
    t.field("queryMyCourse", {
      type: CoursePage,
      args: {
        filter: nonNull(stringArg()),
        text: nonNull(stringArg()),
        order: nonNull(stringArg()),
        sort: stringArg(),
        price: intArg(),
        free: booleanArg(),
        discount: intArg(),
        ratings: intArg(),
        language: stringArg(),
        duration: intArg(),
        level: intArg(),
        cursor: stringArg(),
        queryDirection: intArg(),
      },
      async resolve(par, args, { prisma, user }) {
        console.log("args ", args);
        const dynamicFields: any = {};
        const count = 3;

        if (args?.free !== null) {
          dynamicFields.free = args.free;
        }
        if (args?.language !== null) {
          dynamicFields.language = {
            contains: args.language?.trim(),
          };
        }
        if (args?.level !== 0 && args?.level) {
          dynamicFields.level = args.level;
        }

        const { cursor, queryDirection: dir } = args;
        const text = args?.text?.trim();
        console.log("here now === ", { cursor, dir, text });

        const courses: any = await prisma.course.findMany({
          where: {
            creatorId: user.sub,
            [args.filter]: {
              contains: args.text?.trim(),
              mode: "insensitive",
            },
            price: { lte: args?.price ? args?.price : 500 },
            discount: { lte: args?.discount || 100 },
            ratings: { lte: args?.ratings || 999999 },
            duration: { lte: args?.duration || 360 },
            ...dynamicFields,
          },
          orderBy: {
            [args.order]: args.sort,
          },
          include: {
            creator: true,
          },
          cursor: cursor && text == "" ? { id: cursor } : undefined,
          skip: text !== "" || !cursor ? 0 : 1,
          take: text !== "" ? undefined : dir == 1 ? count : -count,
          // take: 4,
          // text !== "" ? undefined :
        }); // prisma end

        console.log("length", courses?.length);
        const length = courses?.length;

        return {
          // courses,
          courses:
            length >= count
              ? dir == 1
                ? courses.slice(0, -1)
                : courses.slice(1)
              : courses,
          hasNextPage:
            length > count - 1 || args.queryDirection == 0 || !args.cursor
              ? true
              : false,
          hasPrevPage:
            length > count - 1 || args.queryDirection == 1 ? true : false,
        };
      },
    }); // query courses ends
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
      resolve(par, { creatorId, free, ...args }, { prisma, user }) {
        return prisma.course.create({
          data: {
            ...args,
            creatorId: user.sub,
            free: free ? true : false,
          },
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
