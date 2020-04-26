module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/test/'
  : '/',
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/scss/_variables.scss";`
        }
      }
    }
  };