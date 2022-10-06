const jobseekers = require("./controllers/jobseekers.controller");

function routes(fastify, options, done) {
  fastify.register(jobseekers);

  return done();
}

module.exports = routes;
