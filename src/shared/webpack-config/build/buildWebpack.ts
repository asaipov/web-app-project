import webpack from "webpack";
import { buildResolvers } from "./buildResolvers";
import { buildDevServe } from "./buildDevServe";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { IBuildOptions } from "../types/interfaces";

export const buildWebpack = (options: IBuildOptions): webpack.Configuration => {
  const { mode, port, paths } = options;

  const isDev = mode === "development";
  const isProd = mode === "production";

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
