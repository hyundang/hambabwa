/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["image.hambabwa.kr", "*"],
  },
  webpack(config, { webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: { plugins: { removeViewBox: false } },
          },
        },
        "url-loader",
      ],
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        API_DOMAIN:
          process.env.NODE_ENV === "production"
            ? JSON.stringify(process.env.API_URL)
            : JSON.stringify(process.env.DEV_API_URL),
        KAKAO_APP_KEY: JSON.stringify(process.env.KAKAO_APP_KEY),
      })
      // new webpack.EnvironmentPlugin(["NODE_ENV"])
    );

    return config;
  },
  env: {
    API_URL: process.env.API_URL,
    DEV_API_URL: process.env.DEV_API_URL,
    KAKAO_APP_KEY: process.env.KAKAO_APP_KEY,
  },
};

module.exports = nextConfig;
