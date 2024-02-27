const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  },
  transpileDependencies: [
    'vue',
    '@vue/cli-service',
    // Add other dependencies that need transpilation
  ],
});
