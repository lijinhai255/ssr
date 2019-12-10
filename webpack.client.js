const path = require('path');
// const nodeExternals = require('webpack-node-externals')
// 服务端webpack
module.exports = {
    mode:'development',
    // 客户端
    entry:'./client/index.js',
    // 客户端输出
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    },
    module:{
        rules:[{
            test:/\.js$/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-react',['@babel/preset-env']]
            }
        }
        ]
    }
}
