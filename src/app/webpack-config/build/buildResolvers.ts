import type { IBuildOptions } from "../types/interfaces";

export const buildResolvers = (options: IBuildOptions) => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@src": options.paths.src,
    },
  };
};
