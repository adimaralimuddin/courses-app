import { extendType, nonNull, objectType, stringArg } from "nexus";
import { Course } from "./course";

export const Learn = objectType({
  name: "Learn",
  definition(t) {
    t.string("userId");
    t.string("courseId");
    t.boolean("done");
    t.string("currentLessonId");
    t.list.string("doneLesson");

    //coures
    t.field("course", {
      type: Course,
    });
  },
});

export const LearnQuery = extendType({
  type: "Query",
  definition(t) {
    //  learn
    t.field("learn", {
      type: Learn,
      args: { courseId: nonNull(stringArg()) },
      resolve(par, { courseId }, { prisma, user }) {
        return prisma.learn.findFirst({
          where: {
            courseId,
            userId: user.sub,
          },
          include: {
            course: {
              include: {
                modules: {
                  orderBy: { title: "asc" },
                  include: {
                    lessons: {
                      orderBy: { index: "asc" },
                    },
                  },
                },
              },
            },
          },
        });
      },
    });
  },
});

export const LearnMutate = extendType({
  type: "Mutation",
  definition(t) {
    // next lesson
    t.field("learnNext", {
      type: Learn,
      args: {
        courseId: nonNull(stringArg()),
        currentLessonId: nonNull(stringArg()),
      },
      resolve(par, { courseId, currentLessonId }, { prisma, user }) {
        if (!user) return {};
        return prisma.learn.update({
          where: {
            userId_courseId: {
              courseId,
              userId: user.sub,
            },
          },
          data: {
            currentLessonId,
            doneLesson: {
              push: currentLessonId,
            },
          },
        });
      },
    });
  },
});
