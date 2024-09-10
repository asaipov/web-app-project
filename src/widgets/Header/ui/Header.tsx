import { Layout, Menu } from "antd";

import type { IHeaderLayout } from "./interfaces";
import * as styles from "./styles.module.scss";
import { getHeaderItems } from "./utils";

const { Header } = Layout;

export const HeaderLayout = (props: IHeaderLayout) => {
  const { propsComponent } = props;

  const items = getHeaderItems();

  return (
    <Header className={styles.header_style}>
      <Menu
        mode="horizontal"
        className={styles.menu_style}
        theme="dark"
        items={items}
      />
      <div>{propsComponent}</div>
    </Header>
  );
};
