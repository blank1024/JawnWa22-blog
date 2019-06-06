module.exports = {
    pages: {
        index: {
            entry: "src/pages/index/index.js",
            template: "src/pages/index/index.html",
            filename: "index.html"
        }
    },
    devServer: {
        historyApiFallback: {
            rewrites: []
        }
    }
};
