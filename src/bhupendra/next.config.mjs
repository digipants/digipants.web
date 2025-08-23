/** @type {import('next').NextConfig} */
const nextConfig = {
  // IMPORTANT: deploy in a subfolder
  basePath: "/bhupendra",
  output: "export", // static export for Netlify/static hosting
  trailingSlash: true,
  images: { unoptimized: true }, // we are not using next/image, but this keeps export simple
};
export default nextConfig;
