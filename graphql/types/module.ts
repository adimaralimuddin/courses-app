import { extendType, nonNull, objectType, stringArg } from "nexus";
import { Lesson } from "./lesson";

export const Module = objectType({
  name: "Module",
  definition(t) {
    t.string("id");
    t.string("title");
    t.string("duration");

    t.string("courseId");
    t.list.field("lessons", {
      type: Lesson,
      resolve(par, arg, { prisma }) {
        return prisma.lesson.findMany({
          where: { moduleId: par.id ? par.id : undefined },
        });
      },
    });
  },
});

export const ModuleQuery = extendType({
  type: "Query",
  definition(t) {
    // modules
    t.list.field("modules", {
      type: Module,
      args: { courseId: nonNull(stringArg()) },
      resolve(par, { courseId }, { prisma }) {
        return prisma.module.findMany({ where: { courseId } });
      },
    });
  },
});

export const ModuleMutation = extendType({
  type: "Mutation",
  definition(t) {
    // add module
    t.field("addModule", {
      type: Module,
      args: {
        courseId: nonNull(stringArg()),
        title: nonNull(stringArg()),
        duration: stringArg(),
      },
      resolve(par, data, { prisma }) {
        return prisma.module.create({ data });
      },
    });
  },
});
