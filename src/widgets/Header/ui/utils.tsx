import { HomeOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { ROUTES } from "@src/shared/constants";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import type { MenuItem } from "./interfaces";

export const getHeaderItems = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      label: t("main_page"),
      key: "main",
      icon: <HomeOutlined />,
      onClick: () => navigate(ROUTES.HOME),
    },
    {
      label: t("about_page"),
      key: "about",
      icon: <QuestionCircleOutlined />,
      onClick: () => navigate(ROUTES.ABOUT_PAGE),
    },
  ];

  return items;
};
