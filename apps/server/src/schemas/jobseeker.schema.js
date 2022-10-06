const { Type } = require("@sinclair/typebox");

const createJobseekerSchema = {
  schema: {
    body: Type.Object({
      username: Type.String({ pattern: "/[A-Za-z0-9_-]+/" }),
      password: Type.String({ minLength: 8 }),
      nama_company: Type.String(),
      gender: Type.String(),
      alamat: Type.String(),
      no_hp: Type.String({
        pattern: "/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/",
      }),
      email: Type.String({ format: "email" }),
      pendidikan: Type.String(),
      skill: Type.String(),
      pengalaman: Type.String(),
      profilepicture: Type.String({ format: "uri" }),
    }),
  },
};

module.exports = {
  createJobseekerSchema,
};
