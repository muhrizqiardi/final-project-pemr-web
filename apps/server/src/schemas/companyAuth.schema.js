const { Type } = require("@sinclair/typebox");

const signInCompanySchema = {
  schema: {
    body: Type.Object({
      email: Type.String({ format: "email" }),
      password: Type.String({ minLength: 8 }),
    }),
  },
};

const getTokenIsValidSchema = {
  schema: {
    headers: Type.Object({
      Authorization: Type.String(),
    }),
  },
};

module.exports = {
  signInCompanySchema,
  getTokenIsValidSchema
};
