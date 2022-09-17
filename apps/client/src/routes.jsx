import { Router, ReactLocation } from "@tanstack/react-location";
import LandingScreen from "./screens/LandingScreen";

const location = new ReactLocation();

function Routes() {
  return (
    <Router
      location={location}
      routes={[{ path: "/", element: <LandingScreen /> }]}
    />
  );
}

export default Routes;
