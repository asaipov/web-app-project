import React from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";

import i18n from "./app/i18n-config/i18n/i18nProvider";
import { router } from "./app/providers/routes";

const container = createRoot(document.getElementById("root"));
container.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);
