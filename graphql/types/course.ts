import { Prisma } from "@prisma/client";
import {
  booleanArg,
  extendType,
  intArg,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import { Learn } from "./learn";
import { User } from "./user";

export const Course = objectType({
  name: "Course",
  definition(t) {
    t.string("id");
    t.string("title");
    t.string("imageUrl");
    t.string("description");
    t.int("price");
    t.boolean("free");
    t.int("discount");
    t.string("discountType");
    t.int("ratings");
    t.string("language");
    t.string("modules");
    t.int("duration");
    t.int("level");

    // user
    t.string("creatorId");
    t.field("creator", {
      type: User,
    });

    // modules
    t.list.field("modules", {
      type: "Module",
    });

    // students
    t.list.field("students", {
      type: User,
    });

    // learns
    t.list.field("learn", {
      type: Learn,
    });
  },
});

export const CoursePage = objectType({
  name: "CoursePage",
  definition(t) {
    t.list.field("courses", { type: Course });
    t.boolean("hasNextPage");
    t.boolean("hasPrevPage");
  },
});

export const CourseQuery = extendType({
  type: "Query",
  definition(t) {
    // course
    t.field("course", {
      type: Course,
      args: { id: nonNull(stringArg()) },
      resolve(par, { id }, { prisma, user }) {
        console.log("user ", user);
        return prisma.course.findUnique({
          where: { id },
          select: {
            id: true,
            creatorId: true,
            title: true,
            description: true,
            imageUrl: false,
            discount: true,
            discountType: true,
            duration: true,
            free: true,
            language: true,
            level: true,
            price: true,
            ratings: true,
            creator: true,
            // modules will not be included

            // students
            students: {
              where: { id: user.sub },
              select: {
                id: true,
                name: true,
              },
            },
          },
        });
      },
    }); // course

    // courses
    t.list.field("courses", {
      type: Course,
      resolve(par, arg, { prisma }) {
        return prisma.course.findMany();
      },
    }); // courses

    // query courses
    t.field("queryCourse", {
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
        const count = 8;

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
