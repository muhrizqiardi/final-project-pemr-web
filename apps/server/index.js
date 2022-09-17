const fastify = require("fastify")({ logger: true });

// GET http://localhost:9000/
fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

// GET http://localhost:9000/users/
fastify.get("/users", (request, reply) => {
  reply.send([
    { id: "1", email: "bebek@gmail.com" },
    { id: "2", email: "agus@gmail.com" },
    { id: "3", email: "mamamia@gmail.com" },
  ]);
});

// GET http://localhost:9000/search/:userId
fastify.get("/users/:userId", (request, reply) => {
  reply.send(`anda sedang mencari: ${request.params.userId}`);
});

fastify.listen({ port: 9000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
