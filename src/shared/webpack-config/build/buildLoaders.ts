import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import type { ModuleOptions } from "webpack";
import type { IBuildOptions } from "../types/interfaces";

export const buildLoaders = (
  options: IBuildOptions
): ModuleOptions["rules"] => {
  const isDev = options.mode === "development";

  const ASSET_LOADER = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const CSS_LOADER_WITH_MODULES = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__local" : "[hash:base64:8]",
      },
    },
  };

  const TS_LOADER = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
  };

  const SCSS_LOADER = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      CSS_LOADER_WITH_MODULES,
      "sass-loader",
    ],
  };

  const SVG_LOADER = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  const rules = [ASSET_LOADER, TS_LOADER, SCSS_LOADER, SVG_LOADER];
  return rules;
};
