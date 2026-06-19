/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/masterclass",
        destination:
          "https://docs.google.com/forms/d/1HrEdw3xfPeAsJdvbqKY6SXlEMEEuVK9rGClsjdzRVnA/edit",
        permanent: true,
      },
    ];
  },
  transpilePackages: [
    "@prismicio/next",
    "@prismicio/client",
    "@prismicio/react",
  ],
};

module.exports = nextConfig;
