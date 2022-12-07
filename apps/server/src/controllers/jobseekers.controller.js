const prisma = require("../helpers/prisma");
const {
  createJobseekerSchema,
  getManyJobseekerSchema,
  getOneByIdJobseekerSchema,
  updateJobseekerSchema,
  deleteJobseekerSchema,
} = require("../schemas/jobseeker.schema");

function jobseekers(fastify, options, done) {
  // Create jobseeker
  fastify.post("/jobseekers", createJobseekerSchema, async (request, reply) => {
    try {
      const newJobseeker = await prisma.jobseeker.create({
        data: {
          ...request.body,
          birthDate: new Date(request.body.birthDate).toISOString(),
          profilePictureUrl: "",
          resumeUrl: "",
        },
      });

      return reply.status(201).send({
        code: 201,
        data: newJobseeker,
      });
    } catch (error) {
      return reply.status(500).send({
        code: 500,
        message: `Error: ${error}`,
      });
    }
  });

  // Get many jobseeker
  fastify.get("/jobseekers", getManyJobseekerSchema, async (request, reply) => {
    try {
      const jobseekers = await prisma.jobseeker.findMany({
        where: {
          ...request.query,
        },
      });

      const jobseekersWithoutPassword = jobseekers.map((jobseeker) => ({
        id: jobseeker.id,
        fullName: jobseeker.fullName,
        email: jobseeker.email,
        birthDate: jobseeker.birthDate,
        profilePictureUrl: jobseeker.profilePictureUrl,
        resumeUrl: jobseeker.resumeUrl,
        createdAt: jobseeker.createdAt,
        updatedAt: jobseeker.updatedAt,
        gender: jobseeker.gender,
        address: jobseeker.address,
        cityCode: jobseeker.cityCode,
        countryCode: jobseeker.countryCode,
      }));

      reply.status(201).send({
        code: 201,
        data: jobseekersWithoutPassword,
      });
    } catch (error) {
      reply.status(500).send({
        code: 500,
        message: `Error: ${error}`,
      });
    }
  });

  // Get one by id jobseeker
  fastify.get(
    "/jobseekers/:id",
    getOneByIdJobseekerSchema,
    async (request, reply) => {
      try {
        const jobseeker = await prisma.jobseeker.findMany({
          where: request.query,
          select: {
            password: false,
          },
        });

        reply.status(201).send({
          code: 201,
          data: jobseeker,
        });
      } catch (error) {
        reply.status(500).send({
          code: 500,
          message: `Error: ${error}`,
        });
      }
    }
  );

  // Update jobseeker
  fastify.patch(
    "/jobseekers/:id",
    updateJobseekerSchema,
    async (request, reply) => {
      try {
        const updatedJobseeker = await prisma.jobseeker.create({
          data: request.body,
        });

        reply.status(201).send({
          code: 201,
          data: updatedJobseeker,
        });
      } catch (error) {
        reply.status(500).send({
          code: 500,
          message: `Error: ${error}`,
        });
      }
    }
  );

  // Delete jobseeker
  fastify.delete(
    "/jobseekers/:id",
    deleteJobseekerSchema,
    async (request, reply) => {
      try {
        const jobseeker = await prisma.jobseeker.findMany({
          where: request.query,
          select: {
            password: false,
          },
        });

        reply.status(201).send({
          code: 201,
          data: jobseeker,
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

module.exports = jobseekers;
