import { AboutPage, App } from "@src/pages";
import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./constants";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
  },
  {
    path: ROUTES.ABOUT_PAGE,
    element: <AboutPage />,
  },
]);

export default router;
