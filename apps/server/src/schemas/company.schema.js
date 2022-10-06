const { Type } = require("@sinclair/typebox");

const createCompanySchema = {
  schema: {
    body: Type.Object({
      username: Type.String({ pattern: "/[A-Za-z0-9_-]+/" }),
      password: Type.String({ minLength: 8 }),
      nama_company: Type.String(),
      alamat_company: Type.String(),
      no_telepon: Type.String({
        pattern: "/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/",
      }),
      email_company: Type.String({ format: "email" }),
      npwp: Type.String({
        pattern:
          "/^[0][1-9][.]([d]{3})[.]([d]{3})[.][d][-]([d]{3})[.]([d]{3})$/g",
      }),
      profilepicture: Type.String({ format: "uri" }),
    }),
  },
};

exports.createCompanySchema = createCompanySchema;
