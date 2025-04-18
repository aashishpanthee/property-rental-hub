/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatters: [
  //     {
  //       protocol: "https",
  //       hostname: "lh3.googleusercontent.com",
  //       pathname: "**",
  //     },
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
