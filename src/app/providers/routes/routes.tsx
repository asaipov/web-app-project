import { AboutPage, App } from "@src/pages";
import { ROUTES } from "@src/shared/constants";
import { createBrowserRouter } from "react-router-dom";

import { ErrorBoundary } from "../ErrorBoundary";

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
