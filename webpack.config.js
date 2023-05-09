const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
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
        proxy: {
            '/test': {
                target: 'http://localhost:3000/',
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './build/index.html'),
        }),
    ],
    resolve: {
        extensions: ['.js'],
    },
};