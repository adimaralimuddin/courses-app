import { extendType, nonNull, objectType, stringArg } from "nexus";
import { Course } from "./course";
import { Lesson } from "./lesson";

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
      async resolve(par, { courseId }, { prisma, user }) {
        console.log("courseId = ", courseId);
        let ret = await prisma.learn.findFirst({
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
        }); // prisma.learn.findFirst
        console.log("ret ", ret);
        return ret;
      },
    });

    // initLearn
    t.field("initLearn", {
      type: Lesson,
      args: { courseId: nonNull(stringArg()) },
      async resolve(par, { courseId }, { prisma, user }) {
        const learn = await prisma.learn.findUnique({
          where: {
            userId_courseId: {
              userId: user?.sub,
              courseId,
            },
          },
        }); // prisma
        console.log("earn", learn);
        if (learn?.currentLessonId) {
          console.log(
            "yesss****************************************************"
          );
          const lesson_ = await prisma.lesson.findUnique({
            where: { id: learn?.currentLessonId },
          });
          console.log("lesson", lesson_);
          return lesson_;
        } else {
          console.log("nooo___________________________________________");
          const module_ = await prisma.module.findFirst({
            where: { courseId },
            select: {
              id: true,
            },
          });

          console.log("module", module_);

          const lesson_ = await prisma.lesson.findFirst({
            where: { moduleId: module_?.id },
          });
          console.log("lesson", lesson_);
          return lesson_;
        }
      },
    }); // initLearn
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
