import { Router, ReactLocation } from "@tanstack/react-location";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpJobseekerScreen from "./screens/SignUpJobseekerScreen";

const location = new ReactLocation();

function Routes() {
  return (
    <Router
      location={location}
      routes={[
        { path: "/", element: <LandingScreen /> },
        { path: "/login", element: <LoginScreen /> },
        { path: "/sign-up", element: <SignUpJobseekerScreen /> },
      ]}
    />
  );
}

export default Routes;
