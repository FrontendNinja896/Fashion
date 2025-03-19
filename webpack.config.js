const path = require('path')
const htmlplugin = require('html-webpack-plugin')
const { text } = require('stream/consumers')
const { type } = require('os')
module.exports = {
    mode:"production",
    entry:{
        filename:path.resolve(__dirname,"src/index.js")
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name][contenthash].js",
        clean:true
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.(png|jpg|jpeg|svg)$/i,
                type:'asset/resource'
            }
        ]
    },
    plugins:[
        new htmlplugin({
            title:"SiteFashion",
            template:"src/index.html",
            filename:"index.html"
        })
    ]
}