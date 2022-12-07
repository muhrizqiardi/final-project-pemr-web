import { Router, ReactLocation, Navigate } from "@tanstack/react-location";
import CompanyDashboardApplicationsScreen from "./screens/CompanyDashboardApplicationsScreen";
import CompanyDashboardCreateJobVacancyScreen from "./screens/CompanyDashboardCreateJobVacancyScreen";
import CompanyDashboardEditProfileScreen from "./screens/CompanyDashboardEditProfileScreen";
import CompanyDashboardJobVacanciesScreen from "./screens/CompanyDashboardJobVacanciesScreen";
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
        { path: "/login/jobseekers", element: <LoginScreen /> },
        { path: "/login/companies", element: <LoginCompanyScreen /> },
        { path: "/sign-up/jobseekers", element: <SignUpJobseekerScreen /> },
        { path: "/sign-up/companies", element: <SignUpCompanyScreen /> },
        { path: "/jobs", element: <SearchScreen /> },
        { path: "/jobs/:id", element: <JobVacancyDetailScreen /> },
        {
          path: "/company-dashboard/edit-profile",
          element: <CompanyDashboardEditProfileScreen />,
        },
        {
          path: "/company-dashboard/job-vacancies",
          element: <CompanyDashboardJobVacanciesScreen />,
        },
        {
          path: "/company-dashboard/create-job-vacancy",
          element: <CompanyDashboardCreateJobVacancyScreen />,
        },
        {
          path: "/company-dashboard/applications",
          element: <CompanyDashboardApplicationsScreen />,
        },
      ]}
    />
  );
}

export default Routes;
