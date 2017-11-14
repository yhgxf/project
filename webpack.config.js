module.exports = {
    entry: {
        bundle: "./src/main.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devtool: "cheap-eval-source-map",
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        },
        extensions: [".js", ".vue"]
    },
    devServer: {
        port: 8080,
        open: true,
        inline: true
    }
}