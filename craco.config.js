module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    mode: "extends",
    configure: {
      module: {
        rules: [
          {
            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: ["raw-loader", "glslify-loader"],
          },
        ],
      },
    },
  },
}
