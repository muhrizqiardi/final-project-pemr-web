const { Type } = require("@sinclair/typebox");

const signInCompanySchema = {
  schema: {
    summary: "Sign in to Company Account, returns JWT Token String",
    security: [
      {
        Bearer: [],
      },
    ],
    body: Type.Object({
      email: Type.String({ format: "email" }),
      password: Type.String({ minLength: 8 }),
    }),
  },
};

const getTokenIsValidSchema = {
  schema: {
    summary:
      "Check whether the token is valid or not, also returns company data",
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
  signInCompanySchema,
  getTokenIsValidSchema,
};
