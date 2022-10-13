const jobseekers = require("./controllers/jobseekers.controller");
const jobseekersAuth = require("./controllers/jobseekersAuth.controller");
const lowonganController = require("./controllers/lowongan.controller");

function routes(fastify, options, done) {
  fastify.register(jobseekers);
  fastify.register(jobseekersAuth);
  fastify.register(lowonganController);

  return done();
}

module.exports = routes;
