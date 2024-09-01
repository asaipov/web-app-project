import React from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";

import { router } from "./app/providers/routes";
import i18n from "./shared/i18n-config/i18n/i18nProvider";

const container = createRoot(document.getElementById("root"));
container.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);
