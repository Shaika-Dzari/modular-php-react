const path = require('path');
const webpack = require('webpack');

// Rules
const rules = [
    {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src/js'),
        loader: "babel-loader?cacheDirectory"
    }
];


// plugins
const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'manifest'],
        minChunks: function (module) {
            // this assumes your vendor imports exist in the node_modules directory
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    })
];

module.exports = {
    entry: {
        home: './src/js/module/home/index.js',
        vendor: [
            'react',
            'react-dom',
            'redux',
            'redux-thunk',
            'whatwg-fetch'
        ]
    },
    output: {
        path: path.join(__dirname, "src/php/public/js"),
        filename: "[name].[chunkhash].js"
    },
    plugins: plugins,
    module: {
        rules: rules
    }
}