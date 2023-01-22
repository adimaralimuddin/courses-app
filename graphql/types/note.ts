import { extendType, nonNull, objectType, stringArg } from "nexus";
import { DateTime } from "./customs";
import { User } from "./user";

export const Note = objectType({
  name: "Note",
  definition(t) {
    t.string("id");
    t.string("text");

    t.string("userId");
    t.field("user", { type: User });

    t.string("lessonId");
    t.string("courseId");

    t.field("createdAt", { type: DateTime });
  },
});

export const NotePage = objectType({
  name: "NotePage",
  definition(t) {
    t.list.field("notes", { type: Note });
    t.boolean("hasNextPage");
    t.boolean("hasPrevPage");
  },
});

export const NoteQuery = extendType({
  type: "Query",
  definition(t) {
    // notes
    t.list.field("notes", {
      type: Note,
      args: {
        lessonId: nonNull(stringArg()),
      },
      resolve(par, { lessonId }, { prisma }) {
        return prisma.note.findMany({
          where: { lessonId },
        });
      },
    }); // notes

    // qna queries
    t.field("noteQuery", {
      type: NotePage,
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
        const notes = await prisma.note.findMany({
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

        console.log("notes ============================= ", notes);
        return {
          notes: notes?.length < 3 ? notes : notes?.slice(0, -1),
          hasNextPage: notes?.length < 3 ? false : true,
          hasPrevPage: true,
        };
      },
    }); // qna queries
  },
});

export const NoteMutation = extendType({
  type: "Mutation",
  definition(t) {
    // add note
    t.field("addNote", {
      type: Note,
      args: {
        courseId: nonNull(stringArg()),
        lessonId: nonNull(stringArg()),
        text: nonNull(stringArg()),
      },
      resolve(par, { lessonId, courseId, text }, { prisma, user }) {
        return prisma.note.create({
          data: { courseId, text, lessonId, userId: user.sub },
        });
      },
    }); // add note

    // delete note
    t.field("deleteNote", {
      type: Note,
      args: { id: nonNull(stringArg()) },
      resolve(par, { id }, { prisma }) {
        return prisma.note.delete({ where: { id } });
      },
    });

    //update qna
    t.field("updateNote", {
      type: Note,
      args: {
        id: nonNull(stringArg()),
        text: nonNull(stringArg()),
      },
      resolve(par, { id, text }, { prisma }) {
        return prisma.note.update({
          where: { id },
          data: { text },
        });
      },
    });
  },
});
