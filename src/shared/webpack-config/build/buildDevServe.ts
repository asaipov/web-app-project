import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { IBuildOptions } from "../types/interfaces";

export const buildDevServe = (
  options: IBuildOptions
): DevServerConfiguration => {
  return {
    open: true,
    port: options.port ? options.port : 3000,
    historyApiFallback: true,
    hot: true,
  };
};
