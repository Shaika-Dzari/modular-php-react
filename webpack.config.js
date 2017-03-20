const path = require('path');

// Rules
const rules = [
    {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src/js'),
        loader: "babel-loader?cacheDirectory"
    }
];

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'src/php/public/js/bundle.js'
    },
    module: {
        rules: rules
    }
}