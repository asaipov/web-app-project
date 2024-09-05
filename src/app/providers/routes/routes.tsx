import { AboutPage } from "@src/pages/AboutPage";
import { Layout } from "@src/pages/Layout";
import { MainPage } from "@src/pages/MainPage";
import { ROUTES } from "@src/shared/constants";
import { createBrowserRouter } from "react-router-dom";

import { ErrorBoundary } from "../ErrorBoundary";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: ROUTES.ABOUT_PAGE,
        element: <AboutPage />,
      },
      {
        path: ROUTES.HOME,
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
