import NextConfig from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "175dia5tlm.ufs.sh",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
