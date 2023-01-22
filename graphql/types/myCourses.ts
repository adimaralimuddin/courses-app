import { getSession } from "@auth0/nextjs-auth0";
import {
  arg,
  booleanArg,
  extendType,
  intArg,
  list,
  nonNull,
  stringArg,
} from "nexus";
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

    // my course - my-course-detail-page
    t.field("myCourse", {
      type: Course,
      args: { id: nonNull(stringArg()) },
      async resolve(par, { id }, { prisma, req, res, user }): Promise<any> {
        return await prisma.course.findFirst({
          where: { id, creatorId: user.sub },
        });
      },
    }); // my course

    // query courses - my-courses page
    t.field("queryMyCourse", {
      type: CoursePage,
      args: {
        // filters
        filter: nonNull(stringArg()),
        text: nonNull(stringArg()),
        order: nonNull(stringArg()),
        sort: stringArg(),
        cursor: stringArg(),
        queryDirection: intArg(),

        // properties
        price: intArg(),
        free: booleanArg(),
        language: stringArg(),
        cateogry: stringArg(),
        duration: intArg(),
        level: intArg(),
      },
      async resolve(par, args, { prisma, user }) {
        console.log("args ", args);
        const count = 8;

        const { cursor, queryDirection: dir } = args;
        const text = args?.text?.trim();
        // console.log("here now === ", { cursor, dir, text });
        const courses: any = await prisma.course.findMany({
          where: {
            creatorId: user.sub,
            [args.filter]: {
              contains: text,
              mode: "insensitive",
            },
            price: { lte: args?.price ? args?.price : 500 },
            duration: { lte: args?.duration || 360 },
            free: args.free !== null ? args?.free : undefined,
            level: args?.level !== 0 && args?.level ? args.level : undefined,
            language: args?.language ? { has: args?.language } : undefined,
            category: args?.cateogry ? { has: args?.cateogry } : undefined,
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
        title: nonNull(stringArg()),
        description: stringArg(),
        imageUrl: stringArg(),
        price: intArg(),
        free: booleanArg(),
        discount: intArg(),
        discountType: stringArg(),
        language: nonNull(list(stringArg())),
        duration: intArg(),
        level: intArg(),
      },
      async resolve(par, args, { prisma, user }) {
        console.log("addint course ==============");
        console.log("args ", args);
        const x = await prisma.course.create({
          data: {
            title: args?.title,
            description: args?.description ? args?.description : undefined,
            imageUrl: args?.imageUrl,
            price: args?.price,
            free: args?.free !== null ? args?.free : undefined,
            discount: args?.discount,
            discountType: args?.discountType,
            language: ["english"],
            duration: 2,
            level: 3,

            creatorId: user.sub,
          },
        });
        console.log("course created ", x);
        return x;
      },
    }); // add course

    // delete course
    t.field("deleteCourse", {
      type: Course,
      args: { id: nonNull(stringArg()) },
      resolve(par, { id }, { prisma }) {
        // return prisma.course.delete({
        //   where: { id },
        //   select: { id: true },
        // });
        return prisma.course.delete({
          where: { id },
        });
      },
    }); // delete course

    // update course
    t.field("updateCourse", {
      type: Course,
      args: {
        id: nonNull(stringArg()),
        title: nonNull(stringArg()),
        description: stringArg(),
        imageUrl: stringArg(),
        price: intArg(),
        free: booleanArg(),
        discount: intArg(),
        discountType: stringArg(),
        language: nonNull(list(stringArg())),
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
