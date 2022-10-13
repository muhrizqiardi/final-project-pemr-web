const { Type } = require("@sinclair/typebox");

const getOneLowonganByIdSchema = {
  schema: {
    params: Type.Object({
      id_loker: Type.String({ format: "uuid" }),
    }),
  },
};

const createLowonganSchema = {
  schema: {
    body: Type.Object({
      nama_loker: Type.String(),
      posisi: Type.String(),
      kualifikasi: Type.String(),
      batas_waktu: Type.String({ format: "date-time" }),
    }),
  },
};

const updateOneLowonganByIdSchema = {
  schema: {
    params: Type.Object({
      id_loker: Type.String({ format: "uuid" }),
    }),
    body: Type.Object({
      nama_loker: Type.String(),
      posisi: Type.String(),
      kualifikasi: Type.String(),
      batas_waktu: Type.String({ format: "date-time" }),
    }),
  },
};

const deleteOneLowonganByIdSchema = {
  schema: {
    params: Type.Object({
      id_loker: Type.String({ format: "uuid" }),
    }),
  },
};

module.exports = {
  getOneLowonganByIdSchema,
  createLowonganSchema,
  updateOneLowonganByIdSchema,
  deleteOneLowonganByIdSchema
};
