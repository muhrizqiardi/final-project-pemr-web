const prisma = require("../helpers/prisma");
const { createJobseekerSchema } = require("../schemas/jobseeker.schema");

function jobseekers(fastify, options, done) {
  fastify.post("/jobseekers", createJobseekerSchema, async (request, reply) => {
    try {
      const newJobseeker = await prisma.jobseeker.create({ data: request.body });

      reply.status(201).send({
        code: 201,
        data: newJobseeker,
      });
    } catch (error) {
      reply.status(500).send({
        code: 500,
        message: "Gagal membuat jobseeker baru",
      });
    }
  });

  done();
}

module.exports = jobseekers;
