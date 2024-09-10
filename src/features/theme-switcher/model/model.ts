import { DOMAIN } from "@src/shared/constants/model";
import { sample } from "effector";

export const toggleThemeState = DOMAIN.createEvent<boolean>();

export const $themeState = DOMAIN.createStore(true);

sample({
  clock: toggleThemeState,
  target: $themeState,
});
