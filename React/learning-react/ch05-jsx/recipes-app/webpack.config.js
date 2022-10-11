const path = require("path");

module.exports = {
  entry: "./src/index.js", // 엔트리 포인트 지정
  output: {
    path: path.join(__dirname, "dist", "assets"),
    filename: "bundle.js",
  },
  module: {
    rules: [ // 현재는 babel-loader만 포함됨
      {
        test: /\.js$/,
        exclude: /(node_modules)/, // node module의 js 파일을 제외한 전체 js 파일에 babel-loader 실행
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};