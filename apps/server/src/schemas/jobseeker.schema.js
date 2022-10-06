const { Type } = require("@sinclair/typebox");

const createJobseekerSchema = {
  schema: {
    body: Type.Object({
      username: Type.String({ pattern: "^[A-Za-z][A-Za-z0-9_]{7,29}$" }),
      password: Type.String({ minLength: 8 }),
      nama: Type.String(),
      gender: Type.String(),
      alamat: Type.String(),
      no_hp: Type.Number(),
      email: Type.String({ format: "email" }),
      pendidikan: Type.String(),
      skill: Type.String(),
      pengalaman: Type.String(),
      profilpicture: Type.String({ format: "uri" }),
      umur: Type.Number(),
      agama: Type.String(),
    }),
  },
};

module.exports = {
  createJobseekerSchema,
};
