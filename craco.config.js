
const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@controllers': path.resolve(__dirname, "src/controllers/"),
      '@repository': path.resolve(__dirname, "src/repository/"),
      '@view': path.resolve(__dirname, "src/view")
    }
  }
}
