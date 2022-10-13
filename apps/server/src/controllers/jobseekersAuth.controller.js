const prisma = require("../helpers/prisma");
const { signInJobseekerSchema } = require("../schemas/jobseekerAuth.schema");
const jwt = require("jsonwebtoken");

function jobseekersAuth(fastify, options, done) {
  fastify.post(
    "/jobseekers-auth",
    signInJobseekerSchema,
    async (request, reply) => {
      try {
        const jobseeker = await prisma.jobseeker.findFirst({
          where: {
            email: request.body.email,
          },
        });

        const jwtPayload = {
          id_jobseeker: jobseeker.id_jobseeker,
          nama: jobseeker.nama,
          email: jobseeker.email,
        };

        const newToken = jwt.sign(
          JSON.stringify(jwtPayload),
          process.env.SECRET_KEY
        );

        if (request.body.password === jobseeker.password)
          reply.status(201).send({
            code: 201,
            data: newToken,
          });
      } catch (error) {
        reply.status(500).send({
          code: 500,
          message: "Gagal membuat jobseeker baru",
        });
      }
    }
  );

  done();
}

module.exports = jobseekersAuth;
