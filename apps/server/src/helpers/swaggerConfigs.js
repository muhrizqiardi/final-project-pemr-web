module.exports = {
  routePrefix: "/docs",
  swagger: {
    servers: [
      {
        url: "http://localhost:9000",
      },
    ],
    hideUntagged: false,
  },
  exposeRoute: true,
  openapi: {
    info: {
      title: "SpaceWork REST API",
      description: "API documentation for SpaceWork REST API",
      version: "1.0",
    },
    components: {
      securitySchemes: {
        Bearer: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
      },
    },
  },
};
