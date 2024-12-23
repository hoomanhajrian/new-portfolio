import type { NextConfig } from "next";
const path = require('path');

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'sass')],
  },
};

export default nextConfig;
