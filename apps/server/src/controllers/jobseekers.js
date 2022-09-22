// mengimpor fungsi prisma yang berada di folder helpers
const prisma = require("../helpers/prisma");

function jobseekers(fastify, options, done) {
  // membuat post request di path /jobseekers
  fastify.post("/jobseekers", (request, reply) => {
    // jika terjadi error akan langsung loncat ke bawah "catch"
    try {
      // membuat jobseeker baru di database menggunakan prisma
      const newJobseeker = prisma.jobseeker.create({ data: reply.body });

      // mengirim data user baru dengan status code 201
      reply.status(201).send({
        code: 201,
        data: newJobseeker,
      });
    } catch (error) {
      // mengirimkan response dengan status code 500 (internal server error)
      reply.status(500).send({
        code: 500,
        message: "Gagal membuat jobseeker baru",
      });
    }
  });

  // bisa ditambahkan endpoint-endpoint lain yang berkaitan dengan jobseeker

  done(); // pastikan jalankan fungsi done di paling bawah 
}

module.exports = jobseekers;
