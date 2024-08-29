import { createRoot } from "react-dom/client";
import { App, AboutPage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
