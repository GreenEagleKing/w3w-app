const { addWebpackModuleRule, override } = require("customize-cra")

module.exports = {
  webpack: override(
    addWebpackModuleRule({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ["raw-loader", "glslify-loader"],
    })
  ),
}
