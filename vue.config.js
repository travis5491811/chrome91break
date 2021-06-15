module.exports = {
  productionSourceMap: false,
  // baseUrl: './dog/',
  outputDir: process.env.NODE_ENV === 'production'
    ? '../server/dist/'
    : './dist/',
  // outputDir: './dog/',
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:3051',
        // target: 'http://192.168.0.11:3051', //or production dev
        secure: false,
      },
    },
  },
  chainWebpack(config) {
    // Markdown file Loader
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
      });
  },
};
