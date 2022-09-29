const prisma = require("../helpers/prisma");

function jobseekers(fastify, options, done) {
  fastify.post("/jobseekers", (request, reply) => {
    try {
      const newJobseeker = prisma.jobseeker.create({ data: reply.body });

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
