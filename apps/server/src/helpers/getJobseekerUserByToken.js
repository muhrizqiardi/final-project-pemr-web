const prisma = require("./prisma");
const jwt = require("jsonwebtoken");

async function getJobseekerUserByToken(tokenString) {
  try {
    const token = jwt.decode(tokenString);

    let jobseeker = await prisma.jobseeker.findUnique({
      where: {
        id: token.id_jobseeker,
      },
    });

    delete jobseeker.password;

    return jobseeker;
  } catch (error) {
    throw error;
  }
}

module.exports = getJobseekerUserByToken
