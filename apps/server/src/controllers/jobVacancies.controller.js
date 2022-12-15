const getCompanyUserByToken = require("../helpers/getCompanyUserByToken");
const prisma = require("../helpers/prisma");
const {
  createJobVacancySchema,
  getManyJobVacancySchema,
  getOneJobVacancyByIdSchema,
  updateOneJobVacancyByIdSchema,
  deleteOneJobVacancyByIdSchema,
} = require("../schemas/jobVacancy.schema");

function jobVacanciesController(fastify, options, done) {
  fastify.post(
    "/job-vacancies",
    createJobVacancySchema,
    async (request, reply) => {
      try {
        const user = await getCompanyUserByToken(
          request.headers.authorization.split(" ")[1]
        );

        const newJobVacancy = await prisma.jobVacancy.create({
          data: { ...request.body, company: { connect: { id: user.id } } },
        });

        reply.status(200).send({
          code: 200,
          data: newJobVacancy,
        });
      } catch (error) {
        reply.status(500).send({
          code: 500,
          message: `Error: ${error}`,
        });
      }
    }
  );

  fastify.get(
    "/job-vacancies",
    getManyJobVacancySchema,
    async (request, reply) => {
      try {
        const jobVacancies = await prisma.jobVacancy.findMany({
          where: {
            title: {
              contains: request.query.title,
              mode: "insensitive",
            },
            description: {
              contains: request.query.description,
            },
            company: {
              name: {
                contains: request.query.companyName,
              },
              id: request.query.companyId
            },
          },
          select: {
            id: true,
            title: true,
            description: true,
            company: {
              select: {
                id: true,
                name: true,
              },
            },
            createdAt: true,
            updatedAt: true,
          },
        });

        reply.status(200).send({
          code: 200,
          data: jobVacancies,
        });
      } catch (error) {
        reply.status(500).send({
          code: 500,
          message: `Error: ${error}`,
        });
      }
    }
  );

  fastify.get(
    "/job-vacancies/:id",
    getOneJobVacancyByIdSchema,
    async (request, reply) => {
      try {
        const jobVacancy = await prisma.jobVacancy.findUniqueOrThrow({
          where: {
            id: Number(request.params.id),
          },
          select: {
            id: true,
            title: true,
            description: true,
            company: {
              select: {
                id: true,
                name: true,
              },
            },
            createdAt: true,
            updatedAt: true,
          },
        });

        reply.status(200).send({
          code: 200,
          data: jobVacancy,
        });
      } catch (error) {
        reply.status(500).send({
          code: 500,
          message: `Error: ${error}`,
        });
      }
    }
  );

  fastify.patch(
    "/job-vacancies/:id",
    updateOneJobVacancyByIdSchema,
    async (request, reply) => {
      try {
        const updatedJobVacancy = await prisma.jobVacancy.update({
          where: {
            id: Number(request.params.id),
          },
          data: request.body,
        });

        reply.status(200).send({
          code: 200,
          data: updatedJobVacancy,
        });
      } catch (error) {
        reply.status(500).send({
          code: 500,
          message: `Error: ${error}`,
        });
      }
    }
  );

  fastify.delete(
    "/job-vacancies/:id",
    deleteOneJobVacancyByIdSchema,
    async (request, reply) => {
      try {
        const deletedJobVacancy = await prisma.jobVacancy.delete({
          where: {
            id: Number(request.params.id),
          },
        });

        reply.status(200).send({
          code: 200,
          data: deletedJobVacancy,
        });
      } catch (error) {
        reply.status(500).send({
          code: 500,
          message: `Error: ${error}`,
        });
      }
    }
  );

  done();
}

module.exports = jobVacanciesController;
