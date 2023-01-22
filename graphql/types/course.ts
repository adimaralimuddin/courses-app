import {
  booleanArg,
  extendType,
  intArg,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import { resolve } from "path";
import { DateTime } from "./customs";
import { Learn } from "./learn";
import { Module } from "./module";
import { User } from "./user";

export const Course = objectType({
  name: "Course",
  definition(t) {
    t.string("id");
    t.string("title");
    t.string("description");
    t.string("imageUrl");
    t.int("price");
    t.boolean("free");
    t.int("discount");
    t.string("discountType");
    t.list.string("language");
    t.int("level");
    t.int("duration");

    t.string("creatorId");
    t.field("creator", { type: User });

    t.list.field("modules", { type: Module });
    t.list.field("students", { type: User });
    t.list.field("ratings", { type: Rating });
    t.list.field("learn", { type: Learn });
    t.field("_count", { type: CourseCount });

    t.field("createdAt", { type: DateTime });
  },
});

export const Rating = objectType({
  name: "Rating",
  definition(t) {
    t.string("id");
    t.string("text");
    t.int("value");
    t.field("course", { type: Course });
    t.string("courseId");
  },
});

export const CourseCount = objectType({
  name: "CourseCount",
  definition(t) {
    t.int("students");
    t.int("learn");
    t.int("modules");
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
    // course - course-detail-page
    t.field("course", {
      type: Course,
      args: { id: nonNull(stringArg()) },
      resolve(par, { id }, { prisma, user }) {
        console.log("user hello", user);
        return prisma.course.findUnique({
          where: { id },
          select: {
            id: true,
            title: true,
            imageUrl: true,
            description: true,
            price: true,
            free: true,
            discount: true,
            discountType: true,

            language: true,
            duration: true,
            level: true,

            category: true,
            createdAt: true,

            _count: {
              select: {
                students: true,
                ratings: true,
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

    // course students
    t.field("courseStudent", {
      type: Course,
      args: { courseId: nonNull(stringArg()) },
      async resolve(par, { courseId }, { prisma }) {
        const x = await prisma.course.findFirst({
          where: { id: courseId },
          select: {
            _count: {
              select: {
                students: true,
              },
            },
          },
        });

        console.log("x", x);
        return x;
      },
    });

    const QueryCourseArgs = {
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
    };

    // query courses
    t.field("queryCourse", {
      type: CoursePage,
      args: QueryCourseArgs,
      async resolve(par, args, { prisma, user }) {
        console.log("args ", args);
        const count = 8;

        const { cursor, queryDirection: dir } = args;
        const text = args?.text?.trim();
        // console.log("here now === ", { cursor, dir, text });

        const courses: any = await prisma.course.findMany({
          where: {
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
            length > count - 1 || args?.queryDirection == 0 || !args?.cursor
              ? true
              : false,
          hasPrevPage:
            length > count - 1 || args?.queryDirection == 1 ? true : false,
        };
      },
    }); // query courses ends

    t.field("check", {
      type: Learn,
      args: {
        courseId: nonNull(stringArg()),
      },
      async resolve(par, { courseId }, { prisma, user }) {
        const x = await prisma.learn.findUnique({
          where: {
            userId_courseId: {
              courseId,
              userId: user?.sub,
            },
          },
        });
        console.log("x");
        return x;
      },
    });
  },
});
