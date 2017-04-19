
module.exports = {
  entry: ['./app/index.js'],
  output:{
            path: __dirname.replace('config', 'dist'),
            filename: './build/bundle.js',
            publicPath: __dirname.replace('config', 'dist')
          },
  module: {
            loaders:[
                      {
                        loader:'babel-loader',
                        test:   /\.js$/,
                        exclude: /node_modules/
                      }
                    ]
          },
  devServer: {
                port:3000,
                contentBase:'./build',
                inline: true
             }
}
