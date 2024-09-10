import "./shared/styles/nullstyle.scss";

import { ConfigProvider, theme } from "antd";
import { useUnit } from "effector-react";
import React from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";

import i18n from "./app/i18n-config/i18n/i18nProvider";
import { router } from "./app/providers/routes";
import { themeModel } from "./features/theme-switcher";

const container = createRoot(document.getElementById("root"));

const App = () => {
  const isDarkTheme = useUnit(themeModel.$themeState);

  return (
    <React.StrictMode>
      <ConfigProvider
        theme={{
          algorithm: isDarkTheme ? theme.defaultAlgorithm : theme.darkAlgorithm,
        }}
      >
        <I18nextProvider i18n={i18n}>
          <RouterProvider router={router} />
        </I18nextProvider>
      </ConfigProvider>
    </React.StrictMode>
  );
};

container.render(<App />);
