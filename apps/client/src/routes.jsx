import { Router, ReactLocation } from "@tanstack/react-location";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";

const location = new ReactLocation();

function Routes() {
  return (
    <Router
      location={location}
      routes={[
        { path: "/", element: <LandingScreen /> },
        { path: "/login", element: <LoginScreen /> },
      ]}
    />
  );
}

export default Routes;
