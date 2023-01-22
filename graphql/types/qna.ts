import { extendType, nonNull, objectType, stringArg } from "nexus";
import { DateTime } from "./customs";

import { Reply } from "./reply";
import { User } from "./user";

export const Qna = objectType({
  name: "Qna",
  definition(t) {
    t.string("id");
    t.string("text");

    t.string("userId");
    t.field("user", { type: User });

    t.string("lessonId");
    t.string("courseId");
    t.list.field("replies", {
      type: Reply,
    });
    t.field("createdAt", { type: DateTime });
  },
});

export const QnaPage = objectType({
  name: "QnaPage",
  definition(t) {
    t.list.field("qnas", { type: Qna });
    t.boolean("hasNextPage");
    t.boolean("hasPrevPage");
  },
});

export const QnaQuery = extendType({
  type: "Query",
  definition(t) {
    // qnas
    t.list.field("qnas", {
      type: Qna,
      args: {
        lessonId: nonNull(stringArg()),
      },
      resolve(par, { lessonId }, { prisma }) {
        return prisma.qna.findMany({
          where: { lessonId },
          include: {
            user: true,
          },
        });
      },
    }); // qnas

    // qna queries
    t.field("qnaQuery", {
      type: QnaPage,
      args: {
        cursor: stringArg(),
        courseId: nonNull(stringArg()),
        text: nonNull(stringArg()),
        sort: nonNull(stringArg()),
        lesson: nonNull(stringArg()),
        lessonId: nonNull(stringArg()),
        list: nonNull(stringArg()),
      },
      async resolve(
        par,
        { cursor, courseId, text, sort, lesson, lessonId, list },
        { prisma, user }
      ) {
        console.log({ text, sort, lesson, list, cursor });
        const qnas = await prisma.qna.findMany({
          where: {
            courseId,
            lessonId: lesson == "all" ? undefined : lessonId,
            userId: list == "all" ? undefined : user.sub,
            text: { contains: text },
          },
          orderBy: {
            createdAt: sort == "oldest" ? "asc" : "desc",
          },
          include: {
            user: true,
          },
          // take: text?.trim() == "" ? 3 : undefined,
          take: 3,
          skip: cursor ? 1 : undefined,
          cursor: cursor ? { id: cursor } : undefined,
        });

        console.log("qnas ============================= ", qnas);
        return {
          qnas: qnas?.length < 3 ? qnas : qnas?.slice(0, -1),
          hasNextPage: qnas?.length < 3 ? false : true,
          hasPrevPage: true,
        };
      },
    }); // qna queries
  },
});

export const QnaMutation = extendType({
  type: "Mutation",
  definition(t) {
    // add qna
    t.field("addQna", {
      type: Qna,
      args: {
        lessonId: nonNull(stringArg()),
        courseId: nonNull(stringArg()),
        text: nonNull(stringArg()),
      },
      resolve(par, { lessonId, text, courseId }, { prisma, user }) {
        return prisma.qna.create({
          data: { text, lessonId, courseId, userId: user.sub },
        });
      },
    }); // add qna

    // delete qna
    t.field("deleteQna", {
      type: Qna,
      args: { id: nonNull(stringArg()) },
      resolve(par, { id }, { prisma }) {
        return prisma.qna.delete({ where: { id } });
      },
    });

    //update qna
    t.field("updateQna", {
      type: Qna,
      args: {
        id: nonNull(stringArg()),
        text: nonNull(stringArg()),
      },
      resolve(par, { id, text }, { prisma }) {
        return prisma.qna.update({
          where: { id },
          data: { text },
        });
      },
    });
  },
});
