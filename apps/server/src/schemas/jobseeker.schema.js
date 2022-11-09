const { Type } = require("@sinclair/typebox");

const createJobseekerSchema = {
  schema: {
    summary: "Create Jobseeker Account",
    body: Type.Object({
      email: Type.String({ format: "email" }),
      password: Type.String({ minLength: 8 }),
      description: Type.String(),
      fullName: Type.String(),
      birthDate: Type.String({ format: "date" }),
      gender: Type.String(),
      address: Type.String(),
      cityCode: Type.String(),
      countryCode: Type.String(),
    }),
  },
};

const getOneByIdJobseekerSchema = {
  schema: {
    summary: "Get One Jobseeker Account by ID",
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

const getManyJobseekerSchema = {
  schema: {
    summary: "Get Many Jobseeker Account",
    security: [
      {
        Bearer: [],
      },
    ],
    querystring: Type.Object({
      email: Type.Optional(Type.String({ format: "email" })),
      fullName: Type.Optional(Type.String()),
    }),
  },
};

const updateJobseekerSchema = {
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
      description: Type.Optional(Type.String()),
      fullName: Type.Optional(Type.String()),
      profilePictureUrl: Type.Optional(Type.String({ format: "uri" })),
      resumeUrl: Type.Optional(Type.String({ format: "uri" })),
      birthDate: Type.Optional(Type.String({ format: "date" })),
      gender: Type.Optional(Type.String()),
      address: Type.Optional(Type.String()),
      cityCode: Type.Optional(Type.String()),
      countryCode: Type.Optional(Type.String()),
    }),
  },
};

const deleteJobseekerSchema = {
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
  createJobseekerSchema,
  getOneByIdJobseekerSchema,
  getManyJobseekerSchema,
  updateJobseekerSchema,
  deleteJobseekerSchema,
};
