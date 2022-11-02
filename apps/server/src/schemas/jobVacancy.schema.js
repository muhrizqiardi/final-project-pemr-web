const { Type } = require("@sinclair/typebox");

const createJobVacancySchema = {
  schema: {
    body: Type.Object({
      title: Type.String(),
      description: Type.String(),
      companyId: Type.String(),
    }),
  },
};

const getManyJobVacancySchema = {
  schema: {
    querystring: Type.Object({
      title: Type.String(),
      description: Type.String(),
      companyName: Type.String(),
    }),
  },
};

const getOneJobVacancyByIdSchema = {
  schema: {
    params: Type.Object({
      id: Type.Number(),
    }),
  },
};

const updateOneJobVacancyByIdSchema = {
  schema: {
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
