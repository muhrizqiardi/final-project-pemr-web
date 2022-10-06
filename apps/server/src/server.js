const swaggerConfigs = require("./helpers/swaggerConfigs");
const routes = require("./routes");
const server = require("fastify")({ logger: true });

server.register(require("@fastify/swagger"), swaggerConfigs);
server.register(routes);

module.exports = server;
