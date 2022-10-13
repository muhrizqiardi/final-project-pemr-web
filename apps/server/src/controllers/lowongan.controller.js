const prisma = require("../helpers/prisma");
const {
  getOneLowonganByIdSchema,
  createLowonganSchema,
  updateOneLowonganByIdSchema,
} = require("../schemas/lowongan.schema");
const { v4: uuidV4 } = require("uuid");

function lowonganController(fastify, options, done) {
  fastify.post("/lowongan", createLowonganSchema, async (request, reply) => {
    try {
      const newLowongan = await prisma.lowongan.create({
        data: {
          id_loker: uuidV4(),
          ...request.body,
        },
      });

      if (!newLowongan) throw new Error("Gagal membuat lowongan baru");

      reply.status(201).send({
        code: 201,
        data: newJobseeker,
      });
    } catch (error) {
      reply.status(500).send({
        code: 500,
        message: "Gagal membuat lowongan baru",
      });
    }
  });

  fastify.get("/lowongan", async (request, reply) => {
    try {
      const lowongans = await prisma.lowongan.findMany();

      if (!lowongans) throw new Error("Gagal mendapatkan lowongan-lowongan");

      reply.status(201).send({
        code: 201,
        data: lowongans,
      });
    } catch (error) {
      reply.status(500).send({
        code: 500,
        message: "Gagal mendapatkan lowongan-lowongan",
      });
    }
  });

  fastify.get(
    "/lowongan/:id_loker",
    getOneLowonganByIdSchema,
    async (request, reply) => {
      try {
        const lowongans = await prisma.lowongan.findMany({
          where: {
            id_loker: request.params.id_loker,
          },
        });

        if (!lowongans) throw new Error("Gagal mendapatkan lowongan");

        reply.status(201).send({
          code: 201,
          data: lowongans,
        });
      } catch (error) {
        reply.status(500).send({
          code: 500,
          message: "Gagal mendapatkan lowongan",
        });
      }
    }
  );

  fastify.put(
    "/lowongan/:id_loker",
    updateOneLowonganByIdSchema,
    async (request, reply) => {
      try {
        const updatedLowongan = await prisma.lowongan.update({
          where: {
            id_loker: request.params.id_loker,
          },
          data: {
            ...request.body,
          },
        });

        if (!updatedLowongan) throw new Error("Gagal memperbarui lowongan");

        reply.status(201).send({
          code: 201,
          data: newJobseeker,
        });
      } catch (error) {
        reply.status(500).send({
          code: 500,
          message: "Gagal memperbarui lowongan",
        });
      }
    }
  );

  fastify.delete(
    "/lowongan/:id_loker",
    getOneLowonganByIdSchema,
    async (request, reply) => {
      try {
        const lowongans = await prisma.lowongan.delete({
          where: {
            id_loker: request.params.id_loker,
          },
        });

        if (!lowongans) throw new Error("Gagal menghapus lowongan");

        reply.status(201).send({
          code: 201,
          data: lowongans,
        });
      } catch (error) {
        reply.status(500).send({
          code: 500,
          message: "Gagal menghapus lowongan",
        });
      }
    }
  );

  done();
}

module.exports = lowonganController;
