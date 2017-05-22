var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool:'cheap-module-eval-source-map',
    entry:{
        'polyfills':'./source/polyfills',
        'libs':'./source/libs',
        'app':'./source/main'
    },
    output:{
        path:__dirname+'/build',
        // publicPath:'/',
        filename:'[name].js',
        chunkFilename:'chunk[id].js'
    },
    resolve:{
        extensions:['.js','.ts']
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:['app','libs','polyfills']
        }),
        new HtmlWebpackPlugin({
            title:'Angular Setup',
            template:'./source/assets/index.html'
        })
    ],
    module:{
        loaders:[
            {
                test:/\.ts$/,
                loaders:['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            }
        ]
    }
};