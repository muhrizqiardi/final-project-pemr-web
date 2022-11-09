const { Type } = require("@sinclair/typebox");

const createJobVacancySchema = {
  schema: {
    summary: "Create a Job Vacancy",
    security: [
      {
        Bearer: [],
      },
    ],
    body: Type.Object({
      title: Type.String(),
      description: Type.String(),
    }),
  },
};

const getManyJobVacancySchema = {
  schema: {
    summary: "Get Many Job Vacancy",
    querystring: Type.Object({
      title: Type.Optional(Type.String()),
      description: Type.Optional(Type.String()),
    }),
  },
};

const getOneJobVacancyByIdSchema = {
  schema: {
    summary: "Get a Job Vacancy by ID",
    params: Type.Object({
      id: Type.Number(),
    }),
  },
};

const updateOneJobVacancyByIdSchema = {
  schema: {
    summary: "Update a Job Vacancy",
    security: [
      {
        Bearer: [],
      },
    ],
    params: Type.Object({
      id: Type.Number(),
    }),
    body: Type.Object({
      title: Type.Optional(Type.String()),
      description: Type.Optional(Type.String()),
      companyId: Type.Optional(Type.String()),
    }),
  },
};

const deleteOneJobVacancyByIdSchema = {
  schema: {
    summary: "Delete a Job Vacancy",
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
  createJobVacancySchema,
  getManyJobVacancySchema,
  getOneJobVacancyByIdSchema,
  updateOneJobVacancyByIdSchema,
  deleteOneJobVacancyByIdSchema,
};
