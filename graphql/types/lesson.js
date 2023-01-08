import {
  booleanArg,
  extendType,
  intArg,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import { Module } from "./module";

export const Lesson = objectType({
  name: "Lesson",
  definition(t) {
    t.string("id");
    t.string("title");
    t.int("index");
    t.string("description");
    t.string("videoUrl");
    t.boolean("preview");

    // MODULE
    t.string("moduleId");
    t.field("module", {
      type: Module,
    });
    // t.field("userLessons", {
    //   type: "UserLesson",
    // });
  },
});

export const LessonQuery = extendType({
  type: "Query",
  definition(t) {
    // lessons
    t.list.field("lessons", {
      type: Lesson,
      resolve(par, args, { prisma }) {
        return prisma.lesson.findMany();
      },
    }); // lessons

    t.list.field("moduleLessons", {
      type: Lesson,
      args: { moduleId: nonNull(stringArg()) },
      resolve(par, { moduleId }, { prisma }) {
        return prisma.lesson.findMany({ where: { moduleId } });
      },
    });
  },
});

export const LessonMutation = extendType({
  type: "Mutation",

  definition(t) {
    // add lesson
    t.field("addLesson", {
      type: Lesson,
      args: {
        moduleId: nonNull(stringArg()),
        title: nonNull(stringArg()),
        // index: intArg(),
        description: stringArg(),
        videoUrl: stringArg(),
        preview: booleanArg(),
      },
      resolve(par, args, { prisma }) {
        return prisma.lesson.create({
          data: { ...args },
        });
      },
    }); // add lesson

    // update lesson
    t.field("updateLesson", {
      type: Lesson,
      args: {
        id: nonNull(stringArg()),
        title: nonNull(stringArg()),
        description: stringArg(),
        videoUrl: stringArg(),
        preview: booleanArg(),
      },
      resolve(par, args, { prisma }) {
        return prisma.lesson.update({
          where: { id: args.id },
          data: args,
        });
      },
    }); // update lesson

    // delte lesson
    t.field("delteLesson", {
      type: Lesson,
      args: { id: nonNull(stringArg()) },
      resolve(par, { id }, { prisma }) {
        return prisma.lesson.delete({ where: { id }, select: { id: true } });
      },
    });
  },
});
