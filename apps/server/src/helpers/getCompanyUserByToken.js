const prisma = require("./prisma");
const jwt = require("jsonwebtoken");

async function getCompanyUserByToken(tokenString) {
  try {
    const token = jwt.decode(tokenString);

    let company = await prisma.company.findUnique({
      where: {
        id: token.id,
      },
    });

    delete company.password;

    return company;
  } catch (error) {
    throw error;
  }
}

module.exports = getCompanyUserByToken
