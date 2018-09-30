const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProduction = () => process.env.NODE_ENV === 'production';
const getMode = () => {
    return isProduction() ? 'production' : 'development'
};
const getPlugins = () => {
    const isPrd = isProduction();
    const ret = [
    ];

    if (isPrd) {
        ret.push(new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: path.resolve(__dirname, './reports/bundle-report.html')
        }));
    }

    return ret;
};

const getWebpackConfig = () => ({
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    mode: getMode(),
    plugins: getPlugins(),
    watch: !isProduction(),
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    optimization: {
        namedChunks: true,
        splitChunks: {
            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'react',
                    chunks: 'all'
                },
                bootstrap: {
                    test: /[\\/]node_modules[\\/](jquery|bootstrap|popper\.js)[\\/]/,
                    name: 'bootstrap',
                    chunks: 'all'
                }
            }
        }
    }
});

module.exports = getWebpackConfig;