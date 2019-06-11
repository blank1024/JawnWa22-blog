module.exports = {
    devServer: {
        historyApiFallback: true
    },
    configureWebpack: {
        externals: {
            'highlight.js': 'hljs',
            "moment": "moment",
        }
    }
};
