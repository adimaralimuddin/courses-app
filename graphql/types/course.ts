import {
  booleanArg,
  extendType,
  intArg,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
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
  },
});

export const CourseQuery = extendType({
  type: "Query",
  definition(t) {
    // course
    t.field("course", {
      type: Course,
      args: { id: nonNull(stringArg()) },
      resolve(par, { id }, { prisma }) {
        return prisma.course.findUnique({
          where: { id },
          include: {
            creator: true,
            // modules: true,
            students: true,
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
  },
});

// export const CourseMutation = extendType({
//   type: "Mutation",
//   definition(t) {
//     // add course
//     t.field("addCourse", {
//       type: Course,
//       args: {
//         creatorId: nonNull(stringArg()),
//         title: nonNull(stringArg()),
//         imageUrl: stringArg(),
//         description: stringArg(),
//         price: intArg(),
//         free: booleanArg(),
//         discount: intArg(),
//         discountType: stringArg(),
//         ratings: intArg(),
//         language: stringArg(),
//         duration: intArg(),
//         level: intArg(),
//       },
//       resolve(par, args, { prisma }) {
//         return prisma.course.create({
//           data: args,
//         });
//       },
//     }); // add course

//     // delete course
//     t.field("deleteCourse", {
//       type: Course,
//       args: { id: nonNull(stringArg()) },
//       resolve(par, { id }, { prisma }) {
//         return prisma.course.delete({
//           where: { id },
//           select: { id: true },
//         });
//       },
//     }); // delete course
//   },
// });
