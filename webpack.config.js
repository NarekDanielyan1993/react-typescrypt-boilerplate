const path = require("path");
const webpack = require("webpack");

//PLUGINS INCLUDED
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPLugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

const fileName = (ext) => (isDev ? "[name]." + ext : "[name].[hash]." + ext);

const optimizeFiles = (isDevelopment) => {
    if (isDevelopment) {
        return {};
    }
    return {
        minimize: true,
        removeAvailableModules: true,
        minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
    };
};

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: ["react-hot-loader/patch", "./index.tsx"],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: fileName("js"),
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".jsx", ".json", ".csv", ".xml", ".ts", ".tsx"],
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
    devServer: {
        port: 4004,
        publicPath: "/",
        contentBase: path.resolve(__dirname, "dist"),
        watchContentBase: true,
        inline: true,
        historyApiFallback: true,
    },
    optimization: optimizeFiles(isDev),
    devtool: isDEv ? "eval-source-map" : "",
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: !isDev,
                        },
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                        },
                    },
                    "resolve-url-loader",
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|gif|jpg|jpeg)$/,
                use: ["file-loader"],
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPLugin({
            template: path.join(__dirname, "index.html"),
            filename: "index.html",
            minify: {
                collapseWhitespace: !isDev,
            },
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: fileName("css"),
        }),
        new webpack.NamedModulesPlugin(),
        new ForkTsCheckerWebpackPlugin({
            tsconfig: path.resolve(__dirname, "tsconfig.json"),
        }),
    ],
};
