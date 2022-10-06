module.exports = {
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "SpaceWork REST API",
      description: "API documentati on for SpaceWork REST API",
      version: "1.0",
    },
    servers: [
      {
        url: "http://localhost:9000",
      },
    ],
    hideUntagged: false,
  },
  exposeRoute: true,
};