/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-modules": {
      generateScopedName: "custom-[hash:base64:6]", // Khi build, đổi tên thành custom hash
    },
  },
};

export default config;
