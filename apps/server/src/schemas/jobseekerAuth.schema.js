const { Type } = require("@sinclair/typebox");

const signInJobseekerSchema = {
  schema: {
    body: Type.Object({
      email: Type.String({ format: "email" }),
      password: Type.String({ minLength: 8 }),
    }),
  },
};

module.exports = {
  signInJobseekerSchema,
};
