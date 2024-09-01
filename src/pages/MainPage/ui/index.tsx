import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import * as styles from "./App.module.scss";

export const App = () => {
  const [count, setCount] = useState<number>(1);

  const { t } = useTranslation();

  console.log(123);

  return (
    <>
      <h1>{t("privet")}</h1>
      <Link to="/about">About</Link>
      <h1>{__PLATFORM__}</h1>
      <div className={styles.wrapper_style}>{count}</div>
      <button onClick={() => setCount((num) => (num += 1))}>
        <p>Set Count</p>1231231231231
      </button>
    </>
  );
};
