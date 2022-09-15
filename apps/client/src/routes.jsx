import { Router, ReactLocation } from "@tanstack/react-location";

const location = new ReactLocation();

function Routes() {
  return (
    <Router
      location={location}
      routes={[{ path: "/", element: <>placeholder landing page</> }]}
    />
  );
}

export default Routes;
