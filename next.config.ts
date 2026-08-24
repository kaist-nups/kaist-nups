import type { NextConfig } from "next";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserPage = repository.endsWith(".github.io");
const basePath = process.env.GITHUB_ACTIONS && repository && !isUserPage ? `/${repository}` : "";
const isPagesBuild = process.env.GITHUB_PAGES === "true";
const nextConfig: NextConfig = isPagesBuild
  ? { output: "export", basePath, assetPrefix: basePath, trailingSlash: true, images: { unoptimized: true } }
  : { images: { unoptimized: true } };
export default nextConfig;
