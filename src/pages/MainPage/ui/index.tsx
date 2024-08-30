import { useState } from "react";
import { Link } from "react-router-dom";

import * as styles from "./App.module.scss";

export const App = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Link to="/about">About</Link>
      <h1>{__PLATFORM__}</h1>
      <div className={styles.wrapper_style}>{count}</div>
      <button onClick={() => setCount((num) => (num += 1))}>
        <p>Set Count</p>1231231231231
      </button>
    </>
  );
};
