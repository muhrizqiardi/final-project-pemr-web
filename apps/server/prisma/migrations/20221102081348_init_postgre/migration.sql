-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('NOT_YET_RESPONDED', 'ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "Jobseeker" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "profilePictureUrl" TEXT NOT NULL,
    "resumeUrl" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cityCode" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,

    CONSTRAINT "Jobseeker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobseekerEducation" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "schoolName" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "finish" TIMESTAMP(3) NOT NULL,
    "jobseekerId" INTEGER,

    CONSTRAINT "JobseekerEducation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobseekerExperience" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "finish" TIMESTAMP(3) NOT NULL,
    "jobseekerId" INTEGER,

    CONSTRAINT "JobseekerExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobseekerSkill" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "skillName" TEXT NOT NULL,
    "jobseekerId" INTEGER,

    CONSTRAINT "JobseekerSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobVacancy" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "JobVacancy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "jobVacancyId" INTEGER,
    "jobseekerId" INTEGER,
    "status" "ApplicationStatus" NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "profilePictureUrl" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cityCode" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "website" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Jobseeker_email_key" ON "Jobseeker"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Application_jobVacancyId_jobseekerId_key" ON "Application"("jobVacancyId", "jobseekerId");

-- CreateIndex
CREATE UNIQUE INDEX "Company_email_key" ON "Company"("email");

-- AddForeignKey
ALTER TABLE "JobseekerEducation" ADD CONSTRAINT "JobseekerEducation_jobseekerId_fkey" FOREIGN KEY ("jobseekerId") REFERENCES "Jobseeker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobseekerExperience" ADD CONSTRAINT "JobseekerExperience_jobseekerId_fkey" FOREIGN KEY ("jobseekerId") REFERENCES "Jobseeker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobseekerSkill" ADD CONSTRAINT "JobseekerSkill_jobseekerId_fkey" FOREIGN KEY ("jobseekerId") REFERENCES "Jobseeker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobVacancy" ADD CONSTRAINT "JobVacancy_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_jobVacancyId_fkey" FOREIGN KEY ("jobVacancyId") REFERENCES "JobVacancy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_jobseekerId_fkey" FOREIGN KEY ("jobseekerId") REFERENCES "Jobseeker"("id") ON DELETE SET NULL ON UPDATE CASCADE;
