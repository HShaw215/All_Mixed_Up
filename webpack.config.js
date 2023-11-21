const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: '/client/index.jsx',
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }],
                            ['@babel/preset-react', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader','css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true,
        historyApiFallback: true,
        static: {
            publicPath: '/',
            directory: path.join(__dirname, 'dist')
        },
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: {
            '/api/**': {
            target: 'http://localhost:3000/',
            secure: false,
        },
    },
},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
        }),
    ],
    resolve: {
        extensions: ['.js'],
    },
}