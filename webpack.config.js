const path = require('path'); 
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
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
            minify:{
                collapseWhitespace:isProd// оптимизация html
            }
        }),
        new CleanWebpackPlugin(),//очищает dist от предыдущих версий файлов
        //new CopyWebpackPlugin(//копирует ico(картинку) 
        //    {
        //patterns:[
         //           {
         //       from: path.resolve(__dirname, 'src/tree.ico'),//где находится
        //        to: path.resolve(__dirname, 'dist')//куда скопировать
        //    }],} 
        //),
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
                loader:'pug-loader'// загрузчик pug
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
                use:['file-loader']// загрузчик данных картинок
            },
            {
                test:/\.(ttf|woff|woff2|eot)$/,//форматы картинок
                use:['file-loader']// загрузчик данных картинок
            }
        ]
    }
};