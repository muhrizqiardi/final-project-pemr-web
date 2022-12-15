"use strict";

const server = require("./server")
require("dotenv").config();
const Fastify = require("fastify");

// Instantiate Fastify with some config
const app = Fastify({
  logger: true,
});

// Register your application as a normal plugin.
app.register(server, {
  prefix: "/",
});

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
