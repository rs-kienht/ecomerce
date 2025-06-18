import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: './src/assets/js/main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(path.dirname(new URL(import.meta.url).pathname), "htdocs/assets/js"),
        clean: true,
    },
    mode: "development",
    module: {
        
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
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
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: '../images/[name].[hash][ext]',  // Xuất hình ảnh vào htdocs/assets/images/
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(path.dirname(new URL(import.meta.url).pathname), "htdocs"),  // Thư mục chứa các file tĩnh
        },
        compress: true,  // Bật nén file
        port: 4000,  // Cổng mà dev server sẽ chạy
        open: true,  // Tự động mở trình duyệt khi bắt đầu dev server
        hot: true,   // Hỗ trợ hot module replacement
    },
    resolve: {
        alias: {},
    },
    devtool: 'source-map',
};
