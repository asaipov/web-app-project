import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import type { Configuration } from "webpack";
import { DefinePlugin } from "webpack";
import type { IBuildOptions } from "../types/interfaces";
import path from "path";

export const buildPlugins = (
  options: IBuildOptions
): Configuration["plugins"] => {
  const isProd = options.mode === "production";
  const isDev = options.mode === "development";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
      favicon: path.resolve(options.paths.public, "favicon.ico"),
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(options.platform),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(options.paths.public, "locales"),
          to: path.resolve(options.paths.output, "locales"),
        },
      ],
    }),
  ].filter(Boolean);

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "css/[id].[contenthash].css",
      })
    );
  }

  if (isDev) {
    plugins.push(new ForkTsCheckerWebpackPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
};
