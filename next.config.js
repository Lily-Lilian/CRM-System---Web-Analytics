/** @type {import('next').NextConfig} */
// const withImages = require("next-images");

const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    }
}

module.exports = nextConfig;
// module.exports = withImages();
