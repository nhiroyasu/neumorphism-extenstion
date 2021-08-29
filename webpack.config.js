const path = require('path');
module.exports = {
    // モジュールバンドルを行う起点となるファイルの指定
    // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
    // 下記はオブジェクトとして指定した例
    entry: {
        content: './src/content.js',
        popup: './src/popup.js',
    },
    output: {
        // モジュールバンドルを行った結果を出力する場所やファイル名の指定
        // "__dirname"はこのファイルが存在するディレクトリを表すnode.jsで定義済みの定数
        path: path.join(__dirname, 'build'),
        filename: '[name].js', // [name]はentryで記述した名前(この例ではbundle）が入る
    },
    // モジュールとして扱いたいファイルの拡張子を指定する
    // 例えば「import Foo from './foo'」という記述に対して"foo.ts"という名前のファイルをモジュールとして探す
    // デフォルトは['.js', '.json']
    resolve: {
        extensions: ['.js'],
    },
    devServer: {
        // webpack-dev-serverの公開フォルダ
        contentBase: path.join(__dirname, 'build'),
    },
    // モジュールに適用するルールの設定（ここではローダーの設定を行う事が多い）
    module: {
        rules: [
            {
                test: /\.js$/, // jsファイルを対象
                exclude: /node_modules/, // 例外ディレクトリ
                use: {
                    loader: 'babel-loader', //loader名
                    options: {
                        //Babelの設定
                        presets: ['@babel/preset-env'], // preset-envは,es6を対象
                    },
                },
            },
        ],
    },
};
