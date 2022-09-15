import { Router } from "@tanstack/react-location";
import { routesDefinition } from "./helpers/constants";

function Routes() {
  return <Router routes={routesDefinition} />;
}

export default Routes;
