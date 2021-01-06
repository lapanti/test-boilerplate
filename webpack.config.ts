/* eslint-disable import/no-extraneous-dependencies */
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import * as path from 'path'
import type { Configuration as WebpackConfiguration } from 'webpack'
import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration
}

const config: Configuration = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3000,
    },
    // plugins: [
    //     new ForkTsCheckerWebpackPlugin({
    //         async: false,
    //         eslint: {
    //             files: './src/**/*',
    //         },
    //     }),
    // ],
}

export default config
