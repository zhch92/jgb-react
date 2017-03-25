var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, './view/app.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    //enable dev source map
    devtool: 'eval-source-map',
    devServer: {
        proxy: {
            '/jgb-web/v1': {
                // target: 'http://10.10.10.204',
                target: 'http://www.51jigoubao.com',
                secure: false
            }
        }
    },
    // devServer: {
    //     historyApiFallback: true,
    //     hot: true,
    //     inline: true,
    //     stats: { colors: true },
    //     proxy: {
    //         '/jgb-web': {
    //           target: 'http://10.10.10.204',
    //           pathRewrite: {'^/v1' : '/v1'},
    //           changeOrigin: true
    //         }
    //      }
    // },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    //babel重要的loader在这里
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: APP_PATH,
            query: {
                //添加两个presents 使用这两种presets处理js或者jsx文件
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=40000'
        }]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: 'app/index.html'
        })
    ]
}
