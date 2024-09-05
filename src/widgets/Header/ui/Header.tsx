import { Layout, Menu } from "antd";

import * as styles from "./styles.module.scss";
import { getHeaderItems } from "./utils";

const { Header } = Layout;

export const HeaderLayout = () => {
  const items = getHeaderItems();

  return (
    <Header>
      <Menu
        mode="horizontal"
        className={styles.menu_style}
        theme="dark"
        items={items}
      />
    </Header>
  );
};
