const { Type } = require("@sinclair/typebox");

const createCompanySchema = {
  schema: {
    summary: "Create a Company Account",
    body: Type.Object({
      email: Type.String({ format: "email" }),
      password: Type.String({ minLength: 8 }),
      name: Type.String(),
      description: Type.String(),
      address: Type.String(),
      cityCode: Type.String(),
      countryCode: Type.String(),
      phoneNumber: Type.String(),
      website: Type.String(),
    }),
  },
};

const getOneCompanyByIdSchema = {
  schema: {
    summary: "Get a Jobseeker Account by ID",
    security: [
      {
        Bearer: [],
      },
    ],
    params: Type.Object({
      id: Type.Number(),
    }),
  },
};

const getManyCompanySchema = {
  schema: {
    summary: "Get Many Jobseeker Account",
    security: [
      {
        Bearer: [],
      },
    ],
    querystring: Type.Object({
      id: Type.Optional(Type.Number()),
      email: Type.Optional(Type.String({ format: "email" })),
      name: Type.Optional(Type.String()),
    }),
  },
};

const updateCompanySchema = {
  schema: {
    summary: "Update a Jobseeker Account",
    security: [
      {
        Bearer: [],
      },
    ],
    params: Type.Object({
      id: Type.Number(),
    }),
    body: Type.Object({
      email: Type.Optional(Type.String({ format: "email" })),
      password: Type.Optional(Type.String({ minLength: 8 })),
      name: Type.Optional(Type.String()),
      description: Type.Optional(Type.String()),
      profilePictureUrl: Type.Optional(Type.String({ format: "uri" })),
      address: Type.Optional(Type.String()),
      cityCode: Type.Optional(Type.String()),
      countryCode: Type.Optional(Type.String()),
      phoneNumber: Type.Optional(
        Type.String({
          pattern: "/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/",
        })
      ),
      website: Type.Optional(Type.String({ format: "uri" })),
    }),
  },
};

const deleteOneCompanyByIdSchema = {
  schema: {
    summary: "Delete a Jobseeker Account",
    security: [
      {
        Bearer: [],
      },
    ],
    params: Type.Object({
      id: Type.Number(),
    }),
  },
};

module.exports = {
  createCompanySchema,
  getManyCompanySchema,
  getOneCompanyByIdSchema,
  updateCompanySchema,
  deleteOneCompanyByIdSchema,
};
