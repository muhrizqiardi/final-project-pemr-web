const { Type } = require("@sinclair/typebox");

const signInJobseekerSchema = {
  schema: {
    summary: "Sign in to Jobseeker Account, returns JWT token string",
    body: Type.Object({
      email: Type.String({ format: "email" }),
      password: Type.String({ minLength: 8 }),
    }),
  },
};

module.exports = {
  signInJobseekerSchema,
};
