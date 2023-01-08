import { extendType, nonNull, objectType, stringArg } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("email");
    t.string("avatar");
    t.string("about");
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    // users
    t.list.field("users", {
      type: User,
      args: {},
      resolve(par, args, ctx) {
        return ctx.prisma.user.findMany();
      },
    }); // users

    //user
    t.field("user", {
      type: User,
      args: { id: nonNull(stringArg()) },
      resolve(par, { id }, { prisma }) {
        return prisma.user.findUnique({
          where: { id },
        });
      },
    });
  },
});
