module.exports = {
    devServer: {
        host: "localhost",
        port: 8080,
        proxy: {
            "/api": {
                target: "https://wx.qzzg.cn/dev/zgx_k/",
                changeOrigin: true,
                pathRewrite: {
                    "/api": ""
                }
            }
        }
    }
};
