import { ThemeSwitcher } from "@src/features/theme-switcher";
import { HeaderLayout } from "@src/widgets/Header";
import { Layout as AppLayout } from "antd";
import { Outlet } from "react-router-dom";

import * as styles from "./styles.module.scss";

export const Layout = () => {
  return (
    <AppLayout className={styles.layout_style}>
      <HeaderLayout propsComponent={<ThemeSwitcher />} />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
    </AppLayout>
  );
};
