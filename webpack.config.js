module.exports = {
  entry: "./src/app.js",
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  module: {
    loaders: [{
      loader: 'babel-loader'
    }]
  },
  resolve: {
    alias: {
        'ngRoute': 'angular-route'
    }
  }
};
