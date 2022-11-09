const { Type } = require("@sinclair/typebox");

const createNewApplicationSchema = {
  schema: {
    summary: "Apply to a Job",
    security: [
      {
        Bearer: [],
      },
    ],
    body: Type.Object({
      jobVacancyId: Type.Number(),
    }),
  },
};

const getManyApplicationSchema = {
  schema: {
    summary: "Get Many Application by Company and/or Jobseeker",
    querystring: Type.Object({
      companyId: Type.Optional(Type.Number()),
      jobseekerId: Type.Optional(Type.Number()),
      status: Type.Optional(
        Type.Union(
          [
            Type.Literal("ACCEPTED"),
            Type.Literal("REJECTED"),
            Type.Literal("NOT_YET_RESPONDED"),
          ],
          { default: "NOT_YET_RESPONDED" }
        )
      ),
    }),
  },
};

const getOneApplicationSchema = {
  schema: {
    summary: "Get One Application by ID",
    params: Type.Object({
      id: Type.Number(),
    }),
  },
};

const changeApplicationStatusSchema = {
  schema: {
    summary: "Change Application Status to ACCEPTED or REJECTED",
    security: [
      {
        Bearer: [],
      },
    ],
    params: Type.Object({
      id: Type.Number(),
    }),
    body: Type.Object({
      status: Type.Union([Type.Literal("ACCEPTED"), Type.Literal("REJECTED")]),
    }),
  },
};

module.exports = {
  createNewApplicationSchema,
  getManyApplicationSchema,
  getOneApplicationSchema,
  changeApplicationStatusSchema,
};
