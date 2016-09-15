module.exports = {
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  entry: './src/app.tsx',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file'
      }
    ]
  },
  output: {
    path: './dist',
    filename: 'app.js'
  }
};