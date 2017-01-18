module.exports = {
  target: 'web',
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,

  resolve: {
      extensions: [
        "",
        ".js"
      ]
  },
  entry: './main.js',
  /*entry: {
      app: [
        "./app1/app.js"
      ]
  },*/
  output: {
      path: '../build04/',
      filename: "bundle.js"
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=2000' },
      //{ test: /\.html$/, loader: "html-loader" }
      { test: /\.html$/, loader: 'file-loader?name=[path][name].[ext]!extract-loader!html-loader' }
    ]
  }
};
