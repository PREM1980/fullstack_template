const webpack = require('webpack');
const config = {
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
          {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {                  
                    presets: [
                      "@babel/preset-env",
                      "@babel/preset-react"
                    ],
                    plugins: [
                      "@babel/plugin-proposal-class-properties",
                      "@babel/plugin-transform-runtime"
                      ]}
              }
            ]
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },    
};

module.exports = config;