var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool:'cheap-module-eval-source-map',
    entry:{
        'styles':'./source/styles',
        'polyfills':'./source/polyfills',
        'libs':'./source/libs',
        'app':'./source/main'
    },
    output:{
        path:__dirname+'/build/bundles',
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
        new ExtractTextPlugin('[name].css')
    ],
    module:{
        loaders:[
            {
                test:/\.ts$/,
                loaders:['awesome-typescript-loader', 'angular2-template-loader','angular2-router-loader']
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            // {
            //     test:/\.css$/,
            //     loader:'style-loader!css-loader'
            // },
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                loader:'file-loader?name=fonts/[name].[ext]'
            }
        ]
    }
};