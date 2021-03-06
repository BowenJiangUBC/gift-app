var path = require('path');

module.exports = {
    entry: './src/app.js',
     output: {
         path: __dirname + '/build',
         filename: "bundle.js"
     },
     module: {
         rules: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                 plugins: ['transform-runtime'],
                 presets: ['es2015', 'react', 'stage-2']
             }
         }, {
             test: /\.css$/,
             loader: "style-loader!css-loader"
         }]
     },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.js']
    },
    node: {
        console: false,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};