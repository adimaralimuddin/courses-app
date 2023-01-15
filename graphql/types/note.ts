import { extendType, nonNull, objectType, stringArg } from "nexus";

export const Note = objectType({
  name: "Note",
  definition(t) {
    t.string("id");
    t.string("userId");
    t.string("lessonId");
    t.string("text");
    t.string("time");
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
    t.field("updateQna", {
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
