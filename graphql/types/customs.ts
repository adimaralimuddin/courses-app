import { Kind } from "graphql";
import { scalarType } from "nexus";

export const DateTime = scalarType({
  name: "DateTime",
  asNexusMethod: "dateTime",
  description: "DateTime custom scalar type.",
  parseValue: (value) => value, // value from the client
  serialize: (value) => new Date(value as string), // value sent to the client
  parseLiteral: (ast) =>
    ast.kind === Kind.INT ? new Date(parseInt(ast.value) * 1000) : null,
});
