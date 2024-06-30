/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental'
  },
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**"
      },
    ]
  }

};

export default nextConfig;
