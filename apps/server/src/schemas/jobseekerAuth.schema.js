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

const getTokenIsValidSchema = {
  schema: {
    summary:
      "Check whether the token is valid or not, also returns jobseeker data",
    security: [
      {
        Bearer: [],
      },
    ],
    headers: Type.Object({
      Authorization: Type.String(),
    }),
  },
};

module.exports = {
  signInJobseekerSchema,
  getTokenIsValidSchema,
};
