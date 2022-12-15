import { Router, ReactLocation, Navigate } from "@tanstack/react-location";
import axiosInstance from "./helpers/axiosInstance";
import CompanyDashboardApplicationsScreen from "./screens/CompanyDashboardApplicationsScreen";
import CompanyDashboardCreateJobVacancyScreen from "./screens/CompanyDashboardCreateJobVacancyScreen";
import CompanyDashboardEditProfileScreen from "./screens/CompanyDashboardEditProfileScreen";
import CompanyDashboardJobVacanciesScreen from "./screens/CompanyDashboardJobVacanciesScreen";
import JobseekerDashboardApplicationsScreen from "./screens/JobseekerDashboardApplicationsScreen";
import JobseekerDashboardEditProfileScreen from "./screens/JobseekerDashboardEditProfileScreen";
import JobVacancyApplyScreen from "./screens/JobVacancyApplyScreen";
import JobVacancyDetailScreen from "./screens/JobVacancyDetailScreen";
import LandingScreen from "./screens/LandingScreen";
import LoginCompanyScreen from "./screens/LoginCompanyScreen";
import LoginScreen from "./screens/LoginScreen";
import SearchScreen from "./screens/SearchScreen";
import SignUpCompanyScreen from "./screens/SignUpCompanyScreen";
import SignUpJobseekerScreen from "./screens/SignUpJobseekerScreen";

const location = new ReactLocation();

function Routes() {
  return (
    <Router
      location={location}
      routes={[
        { path: "/", element: <LandingScreen /> },
        {
          path: "login",
          children: [
            {
              path: "jobseekers",
              element: <LoginScreen />,
            },
            {
              path: "companies",
              element: <LoginCompanyScreen />,
            },
          ],
        },
        {
          path: "sign-up",
          children: [
            {
              path: "jobseekers",
              element: <SignUpJobseekerScreen />,
            },
            {
              path: "companies",
              element: <SignUpCompanyScreen />,
            },
          ],
        },
        { path: "search-jobs", element: <SearchScreen /> },
        {
          path: "jobs/:id",
          children: [
            {
              path: "/",
              element: <JobVacancyDetailScreen />,
              loader: async ({ params: { id } }) => ({
                jobVacancyDetail: (
                  await axiosInstance.get(`/job-vacancies/${id}`)
                ).data.data,
              }),
            },
            {
              path: "/apply",
              element: <JobVacancyApplyScreen />,
              loader: async ({ params: { id } }) => ({
                jobVacancyDetail: (
                  await axiosInstance.get(`/job-vacancies/${id}`)
                ).data.data,
              }),
            },
          ],
        },

        {
          path: "company-dashboard",
          children: [
            {
              path: "edit-profile",
              element: <CompanyDashboardEditProfileScreen />,
            },
            {
              path: "job-vacancies",
              element: <CompanyDashboardJobVacanciesScreen />,
            },
            {
              path: "create-job-vacancy",
              element: <CompanyDashboardCreateJobVacancyScreen />,
            },
            {
              path: "applications",
              element: <CompanyDashboardApplicationsScreen />,
            },
          ],
        },
        {
          path: "jobseeker-dashboard",
          children: [
            {
              path: "edit-profile",
              element: <JobseekerDashboardEditProfileScreen />,
            },
            {
              path: "applications",
              element: <JobseekerDashboardApplicationsScreen />,
            },
          ],
        },
      ]}
    />
  );
}

export default Routes;
