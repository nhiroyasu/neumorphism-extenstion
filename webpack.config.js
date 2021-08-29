const path = require('path');
module.exports = {
    entry: {
        content: './src/content.js',
        popup: './src/popup.js',
        background: './src/background.js',
    },
    devtool: false,
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
