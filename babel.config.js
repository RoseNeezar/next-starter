module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["react-native-web", { commonjs: true }],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
};
