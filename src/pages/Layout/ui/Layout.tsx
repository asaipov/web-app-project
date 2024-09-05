import { HeaderLayout } from "@src/widgets/Header";
import { Outlet } from "react-router-dom";

import * as styles from "./styles.module.scss";

export const Layout = () => {
  return (
    <>
      <HeaderLayout />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
    </>
  );
};
