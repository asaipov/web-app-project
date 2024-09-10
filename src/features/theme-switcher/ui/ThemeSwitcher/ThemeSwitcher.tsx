import { MoonFilled, SunFilled } from "@ant-design/icons";
import { Switch } from "antd";
import { useUnit } from "effector-react";

import { $themeState, toggleThemeState } from "../../model/model";

export const ThemeSwitcher = () => {
  const [theme, onThemeChange] = useUnit([$themeState, toggleThemeState]);

  return (
    <Switch
      checkedChildren={<SunFilled />}
      unCheckedChildren={<MoonFilled />}
      onChange={onThemeChange}
      value={theme}
    />
  );
};
