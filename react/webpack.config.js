var path = require('path');
var webpack = require('webpack');


/*
var fs = require('fs');
var reactSettings = {env: 'development'};
ioParams = {incDir:''};
if (fs.existsSync('/etc/IfOnlyConfig')) {
    var configPath = '/etc/IfOnlyConfig';
} else if (fs.existsSync('C:\\IfOnlyConfig')) {
    var configPath = 'C:\\IfOnlyConfig';
} else {
    console.error("IfOnlyConfig dir doesn't exist at /etc/IfOnlyConfig (for unix) or /IfOnlyConfig (for Windows)!!");
    process.exit(1);
}
var nodeConfig = require(configPath + '/nodeConfig.js');
if(nodeConfig.reactSettings!=undefined){
    reactSettings = nodeConfig.reactSettings;
    if(reactSettings.env==undefined){
        reactSettings.env = 'development';
    }
    
}
console.log('reactSettings.env: ' + reactSettings.env);
//reactSettings.env = 'development';                    // for testing only
*/

module.exports = {
    mode: 'development',
    entry: {
        //helloworld: "./src/helloworld.jsx",
        //tutorial: "./src/tutorial.jsx",
        pageframe: "./src/entry/pageframe.jsx",
    },
    
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
        ]
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new webpack.DefinePlugin({ // <-- key to reducing React's size
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        //new webpack.HotModuleReplacementPlugin()

    ]    
};
