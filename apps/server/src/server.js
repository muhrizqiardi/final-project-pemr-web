const swaggerConfigs = require("./helpers/swaggerConfigs");
const routes = require("./routes");
const server = require("fastify")({ logger: true });
const cors = require("@fastify/cors");

server.register(require("@fastify/swagger"), swaggerConfigs);
server.register(routes);
server.register(cors, { origin: "*" });

module.exports = server;
