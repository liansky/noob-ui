// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  plugins: {
    "postcss-import": {},  //  在@import css文件的时候让webpack监听并编译
    "postcss-url": {},     //
    "autoprefixer": {browsers: ['iOS>7', 'Android>4']} // 浏览器兼容补全
  }
}
