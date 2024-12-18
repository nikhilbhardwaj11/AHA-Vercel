/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aha-devbucket.s3.us-west-1.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "aha-devbucket.s3.amazonaws.com", 
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.webfronts.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "d3e2ur344bd1wk.cloudfront.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
