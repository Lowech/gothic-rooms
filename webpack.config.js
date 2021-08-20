const path = require('path'); 
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const  webpack  = require('webpack');



const isDev= process.env.NODE_ENV==='development';//выставляем проверку на сборку приложения development или production
const isProd=!isDev;

const optimization =()=>{
    const config={
            splitChunks:{
                chunks:'all'
            }
    }
    if(isProd)
    {
        config.minimizer=[
            new TerserWebpackPlugin(),
            new OptimizeCssAssetsWebpackPlugin()
        ]
    }
    return config
}

module.exports={
    context:path.resolve(__dirname,'src'),//название папки откуда webpack забирает файлы
    mode:'development',//модель сборки webpack, бывает еще production
    entry: { //названия файлов в папке src(от туда webpack их будет забирать)
        index:'./index.js'
},
    output:{//названия файлов  и куда их webpack будет собирать
        filename: '[name].[id].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    optimization:optimization(),//оптимизация сборки для лучшей производительности
    devServer:{//следит за изминениями в файлах и обновляет страницу в браузаре
        port:4200,
        overlay: true,
        open: true
    },
    
    plugins:[
        new HTMLWebpackPlugin({
            template:'./index.pug',//названия файлов в папке src
            filename: 'index.html',
            minify:{
                collapseWhitespace:isProd// оптимизация html
            }
        }),
        new HTMLWebpackPlugin({
            template:'./modules/all-pages/ui-kit-form-elements.pug',//названия файлов в папке src
            filename: 'modules/all-pages/ui-kit-form-elements.html',
            minify:{
                collapseWhitespace:isProd// оптимизация html
            }
        }),
        new HTMLWebpackPlugin({
            template:'./modules/all-pages/landing-page/landing-page.pug',//названия файлов в папке src
            filename: 'modules/all-pages/landing-page/landing-page.html',
            minify:{
                collapseWhitespace:isProd// оптимизация html
            }
        }),
        new HTMLWebpackPlugin({
            template:'./modules/all-pages/page-login/page-login.pug',//названия файлов в папке src
            filename: 'modules/all-pages/page-login/page-login.html',
            
        }),
        new HTMLWebpackPlugin({
            template:'./modules/all-pages/page-registration/page-registration.pug',//названия файлов в папке src
            filename: 'modules/all-pages/page-registration/page-registration.html',
            minify:{
                collapseWhitespace:isProd// оптимизация html
            }
        }),
        new HTMLWebpackPlugin({
            template:'./modules/all-pages/search-room/search-room.pug',//названия файлов в папке src
            filename: 'modules/all-pages/search-room/search-room.html',
            minify:{
                collapseWhitespace:isProd// оптимизация html
            }
        }),
        new HTMLWebpackPlugin({
            template:'./modules/all-pages/room-details/room-details.pug',//названия файлов в папке src
            filename: 'modules/all-pages/room-details/room-details.html',
            minify:{
                collapseWhitespace:isProd// оптимизация html
            }
        }),
        new CleanWebpackPlugin(),//очищает dist от предыдущих версий файлов
        new CopyWebpackPlugin(//копирует ico(картинку) 
            {
        patterns:[
                    {
              from: path.resolve(__dirname, 'src/favicon.ico'),//где находится
               to: path.resolve(__dirname, 'dist')//куда скопировать
            }],} 
        ),
        new MiniCssExtractPlugin({//собирает все файлы css в один
            filename:'[name].[id].bundle.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          }) 
    ],
    module:{
        rules:[
            {
                test:/\.css$/,// css
                use:[
                    {
                    loader: MiniCssExtractPlugin.loader,
                    //options:{
                     //   hmr: true,
                     //   reloadAll: true
                    //},
                }, 'css-loader']
            },
            {
                test:/\.pug$/,//  препроцессор HTML
                loader:'pug-loader',// загрузчик pug
                options: {
                    pretty: true
                  },
            },
            {
                test:/\.sass$/,//препроцессор css
                use:
                [
                    {
                    loader: MiniCssExtractPlugin.loader,
                   
                },
                'css-loader',
                'sass-loader'
            ]
            },
            {
                test:/\.(png|gif|svg|jpg)$/,//форматы картинок
                use:[
                    {
                        loader:'file-loader',// загрузчик данных картинок 
                        options: {
                            name: "img/[name].[ext]",//общая папка для картинок при сборки в dist
                            esModule: false,
                        }
                    }
              ]
            },
            {
                test:/\.(ttf|woff|woff2|eot)$/,//форматы картинок
                use:[
                    {
                        loader:'file-loader',// загрузчик данных шрифтов 
                        options: {
                            name: "fonts/[name].[ext]"//общая папка для шрифтов при сборки в dist
                        }
                    }
                ]
            }
        ]
    }
};