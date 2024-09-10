import type { MenuProps } from "antd";
import type { ReactElement } from "react";

export type MenuItem = Required<MenuProps>["items"][number];

export interface IHeaderLayout {
  propsComponent: ReactElement;
}
