/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'none',
  entry: "./src/main.js",
  output: {
    filename: 'bundle.js',
    clean: true
  },
  optimization: {
    usedExports: true, // 模块只导出被使用的成员
  },
}