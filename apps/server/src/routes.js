const companies = require("./controllers/companies.controller");
const jobseekers = require("./controllers/jobseekers.controller");
const jobseekersAuth = require("./controllers/jobseekersAuth.controller");
const jobVacanciesController = require("./controllers/jobVacancies.controller");

function routes(fastify, options, done) {
  fastify.register(jobseekers);
  fastify.register(jobseekersAuth);
  fastify.register(companies);
  fastify.register(jobVacanciesController)

  return done();
}

module.exports = routes;
