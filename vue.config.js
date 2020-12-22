module.exports = {
    devServer: {
        host: "localhost",
        port: 8080,
        proxy: {
            "/api": {
                target: "http://194.0.11.18:9088/",
                changeOrigin: true,
                pathRewrite: {
                    "/api": ""
                }
            }
        }
    }
};
