import type webpack from "webpack";

import type { IBuildOptions } from "../types/interfaces";
import { buildDevServe } from "./buildDevServe";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";

export const buildWebpack = (options: IBuildOptions): webpack.Configuration => {
  const { mode, port, paths } = options;

  const isDev = mode === "development";
  const isProd = mode === "production";

  console.log(123);

  return {
    mode: mode ?? "development",
    entry: paths.entry,
    devtool: isDev ? "inline-source-map" : false,
    devServer: isDev ? buildDevServe(options) : undefined,
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
  };
};
