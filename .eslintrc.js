module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  "globals": {
    "Vue":true,
    "$": true,
    "event":true,
    "history":true,
    "Navigation":true
  },
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 不能有没有使用变量
    "no-unused-vars": ["error", {"args": "none" }],
    // 代码最后一行关闭
    "no-multiple-empty-lines": "off",
    // 函数内添加空行关闭
    "no-trailing-spaces": "off",
    // 不必要非得用骆驼拼接法
    "camelcase": 0,
    // 可以单独使用 __dirname
    "no-path-concat": "off",
    // 设置为0，代表 == 也可以不必要非得 ===
    "eqeqeq": 0
  }
}
