import { AboutPage, App } from "@src/pages";
import { createBrowserRouter } from "react-router-dom";

import { ErrorBoundary } from "../ErrorBoundary";
import { ROUTES } from "./constants";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: ROUTES.ABOUT_PAGE,
    element: <AboutPage />,
    errorElement: <ErrorBoundary />,
  },
]);

export default router;
