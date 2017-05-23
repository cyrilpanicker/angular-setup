var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool:'cheap-module-eval-source-map',
    entry:{
        'styles':'./source/styles',
        'polyfills':'./source/polyfills',
        'libs':'./source/libs',
        'app':'./source/main'
    },
    output:{
        path:__dirname+'/build',
        publicPath:'/',
        filename:'scripts/[name].js',
        chunkFilename:'scripts/chunk[id].js'
    },
    resolve:{
        extensions:['.js','.ts']
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:['app','libs','polyfills']
        }),
        new ExtractTextPlugin('styles/app.css'),
        new HtmlWebpackPlugin({
            template:'./source/assets/index.html'
        })
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
            {
                test:/.*app.*\.css$/,
                loaders:['to-string-loader','css-loader']
            },
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                }),
                exclude:/.*app.*\.css$/
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                loader:'file-loader?name=fonts/[name].[ext]'
            }
        ]
    }
};