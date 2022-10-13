const jobseekers = require("./controllers/jobseekers.controller");
const jobseekersAuth = require("./controllers/jobseekersAuth.controller");

function routes(fastify, options, done) {
  fastify.register(jobseekers);
  fastify.register(jobseekersAuth);

  return done();
}

module.exports = routes;
