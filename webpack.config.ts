import path from "path";
import webpack from "webpack";
import { buildWebpack } from "./src/shared/webpack-config/build/buildWebpack";
import {
  BuildPlatform,
  IBuildPaths,
} from "./src/shared/webpack-config/types/interfaces";

export type Mode = "production" | "development";

interface IEnvVariables {
  mode: Mode;
  port: number;
  analyzer?: boolean;
  platform: BuildPlatform;
}

export default (env: IEnvVariables) => {
  const paths: IBuildPaths = {
    output: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public"),
  };
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    analyzer: env.analyzer ?? false,
    platform: env.platform ?? "desktop",
  });
  return config;
};
