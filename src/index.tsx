import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AboutPage, App } from "./pages";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

const container = createRoot(document.getElementById("root"));
container.render(<RouterProvider router={router} />);
