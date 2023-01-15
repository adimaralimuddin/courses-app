import { extendType, nonNull, objectType, stringArg } from "nexus";

export const Reply = objectType({
  name: "Reply",
  definition(t) {
    t.string("id");
    t.string("text");
    t.string("qnaId");
  },
});

export const ReplyQuery = extendType({
  type: "Query",
  definition(t) {
    // replies
    t.list.field("replies", {
      type: Reply,
      args: {
        qnaId: nonNull(stringArg()),
      },
      resolve(par, { qnaId }, { prisma }) {
        return [];
      },
    });
  },
});
