const prisma = require("../helpers/prisma");
const { signInJobseekerSchema } = require("../schemas/jobseekerAuth.schema");
const jwt = require("jsonwebtoken");
const {
  signInCompanySchema,
  getTokenIsValidSchema,
} = require("../schemas/companyAuth.schema");

function companiesAuth(fastify, options, done) {
  fastify.post(
    "/companies-auth",
    signInCompanySchema,
    async (request, reply) => {
      try {
        const company = await prisma.company.findFirst({
          where: {
            email: request.body.email,
          },
        });

        const jwtPayload = {
          id: company.id,
          email: company.email,
        };

        const newToken = jwt.sign(
          JSON.stringify(jwtPayload),
          process.env.SECRET_KEY
        );

        if (request.body.password !== company.password)
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
    "/companies-auth",
    getTokenIsValidSchema,
    async (request, reply) => {
      try {
        const token = jwt.decode(request.headers.authorization.split(" ")[1]);

        let company = await prisma.company.findUnique({
          where: {
            id: token.id,
          },
        });

        delete company.password;

        return reply.status(200).send({ code: 200, data: company });
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

module.exports = companiesAuth;
