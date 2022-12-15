const prisma = require("../helpers/prisma");
const {
  signInJobseekerSchema,
  getTokenIsValidSchema,
} = require("../schemas/jobseekerAuth.schema");
const jwt = require("jsonwebtoken");

function jobseekersAuth(fastify, options, done) {
  fastify.post(
    "/jobseekers-auth",
    signInJobseekerSchema,
    async (request, reply) => {
      try {
        const jobseeker = await prisma.jobseeker.findUniqueOrThrow({
          where: {
            email: request.body.email,
          },
        });

        const jwtPayload = {
          id_jobseeker: jobseeker.id,
          nama: jobseeker.nama,
          email: jobseeker.email,
        };

        const newToken = jwt.sign(
          JSON.stringify(jwtPayload),
          process.env.SECRET_KEY
        );

        if (request.body.password !== jobseeker.password)
          throw new Error("error signed in");

        return reply.status(201).send({
          code: 201,
          data: newToken,
        });
      } catch (error) {
        return reply.status(500).send({
          code: 500,
          message: `Error: ${error}`,
        });
      }
    }
  );

  fastify.get(
    "/jobseekers-auth",
    getTokenIsValidSchema,
    async (request, reply) => {
      try {
        const token = jwt.decode(request.headers.authorization.split(" ")[1]);

        let jobseeker = await prisma.jobseeker.findUnique({
          where: {
            id: token.id_jobseeker,
          },
        });

        delete jobseeker.password;

        return reply.status(200).send({ code: 200, data: jobseeker });
      } catch (error) {
        return reply.status(500).send({
          code: 500,
          message: `Error: ${error}`,
        });
      }
    }
  );

  done();
}

module.exports = jobseekersAuth;
