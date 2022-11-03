const prisma = require("../helpers/prisma");
const {
  getManyCompanySchema,
  getOneCompanyByIdSchema,
  updateCompanySchema,
  createCompanySchema,
} = require("../schemas/company.schema");

function companies(fastify, options, done) {
  // Create companies
  fastify.post("/companies", createCompanySchema, async (request, reply) => {
    try {
      const newCompany = await prisma.company.create({
        data: { ...request.body, profilePictureUrl: "" },
      });

      reply.status(201).send({
        code: 201,
        data: newCompany,
      });
    } catch (error) {
      reply.status(500).send({
        code: 500,
        message: "Gagal membuat jobseeker baru",
      });
    }
  });

  // Get many companies
  fastify.get("/companies", getManyCompanySchema, async (request, reply) => {
    try {
      let companies = await prisma.company.findMany({
        where: {
          ...request.query,
        },
      });

      reply.status(200).send({
        code: 200,
        data: companies,
      });
    } catch (error) {
      reply.status(500).send({
        code: 500,
        message: `Error: ${error}`,
      });
    }
  });

  // Get one by id companies
  fastify.get(
    "/companies/:id",
    getOneCompanyByIdSchema,
    async (request, reply) => {
      try {
        const company = await prisma.company.findUnique({
          where: { id: request.params.id },
        });

        reply.status(201).send({
          code: 201,
          data: company,
        });
      } catch (error) {
        reply.status(500).send({
          code: 500,
          message: `Error: ${error}`,
        });
      }
    }
  );

  // Update companies
  fastify.patch(
    "/companies/:id",
    updateCompanySchema,
    async (request, reply) => {
      try {
        const updatedCompany = await prisma.company.update({
          where: {
            id: request.params.id,
          },
        });

        reply.status(200).send({
          code: 200,
          data: updatedCompany,
        });
      } catch (error) {
        reply.status(500).send({
          code: 500,
          message: "Gagal membuat jobseeker baru",
        });
      }
    }
  );

  // Delete companies
  fastify.delete(
    "/companies/:id",
    getOneCompanyByIdSchema,
    async (request, reply) => {
      try {
        const company = await prisma.company.delete({
          where: { id: request.params.id },
        });

        reply.status(200).send({
          code: 200,
          data: company,
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

module.exports = companies;
