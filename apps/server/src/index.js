const server = require("./server");

server.listen({ port: 9000, host: process.env.HOST ?? "localhost" });
