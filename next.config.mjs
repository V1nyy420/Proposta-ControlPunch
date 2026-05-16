/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = "Controlpunch";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repositoryName}` : undefined,
  assetPrefix: isGithubPages ? `/${repositoryName}/` : undefined,
};

export default nextConfig;
