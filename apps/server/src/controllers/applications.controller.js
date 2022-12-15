const getCompanyUserByToken = require("../helpers/getCompanyUserByToken");
const getJobseekerUserByToken = require("../helpers/getJobseekerUserByToken");
const prisma = require("../helpers/prisma");
const {
  createNewApplicationSchema,
  getOneApplicationSchema,
  changeApplicationStatusSchema,
  getManyApplicationSchema,
} = require("../schemas/application.schema");

function applicationsController(fastify, options, done) {
  fastify.post(
    "/applications",
    createNewApplicationSchema,
    async (request, reply) => {
      try {
        const jobseeker = await getJobseekerUserByToken(
          request.headers.authorization.split(" ")[1]
        );

        const newApplication = await prisma.application.create({
          data: {
            coverLetter: request.body.coverLetter,
            jobVacancy: {
              connect: {
                id: request.body.jobVacancyId,
              },
            },
            jobseeker: {
              connect: { id: jobseeker.id },
            },
            status: "NOT_YET_RESPONDED",
          },
        });

        reply.status(200).send({
          code: 200,
          data: newApplication,
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
    "/applications",
    getManyApplicationSchema,
    async (request, reply) => {
      let where = {};

      if (request.query.jobseekerId && request.query.companyId) {
        where = {
          status: request.query.status ?? "NOT_YET_RESPONDED",
          OR: [
            {
              jobseeker: {
                id: Number(request.query.jobseekerId),
              },
              jobVacancy: {
                company: {
                  id: Number(request.query.companyId),
                },
              },
            },
          ],
        };
      } else if (request.query.jobseekerId && !request.query.companyId) {
        where = {
          status: request.query.status ?? "NOT_YET_RESPONDED",
          OR: [
            {
              jobseeker: {
                id: Number(request.query.jobseekerId),
              },
            },
          ],
        };
      } else if (!request.query.jobseekerId && request.query.companyId) {
        where = {
          status: request.query.status ?? "NOT_YET_RESPONDED",
          OR: [
            {
              jobVacancy: {
                company: {
                  id: Number(request.query.companyId),
                },
              },
            },
          ],
        };
      }

      try {
        const applications = await prisma.application.findMany({
          where,
          select: {
            id: true,
            status: true,
            coverLetter: true,
            jobVacancy: {
              select: {
                id: true,
                title: true,
                company: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
            jobseeker: {
              select: {
                id: true,
                fullName: true,
                description: true,
              },
            },
            createdAt: true,
            updatedAt: true,
          },
        });

        reply.status(200).send({
          code: 200,
          data: applications,
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
    "/applications/:id",
    getOneApplicationSchema,
    async (request, reply) => {
      try {
        const application = await prisma.application.findUnique({
          where: {
            id: Number(request.params.id),
          },
        });

        reply.status(200).send({
          code: 200,
          data: application,
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
    "/applications/:id",
    changeApplicationStatusSchema,
    async (request, reply) => {
      try {
        const company = await getCompanyUserByToken(
          request.headers.authorization.split(" ")[1]
        );

        if (!company) throw new Error("Unauthorized");

        const application = await prisma.application.update({
          where: {
            id: Number(request.params.id),
          },
          data: {
            status: request.body.status,
          },
        });

        reply.status(200).send({
          code: 200,
          data: application,
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

module.exports = applicationsController;
