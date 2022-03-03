// this is to fix the problem on windows: Support for the experimental syntax 'jsx' isn't currently enabled
module.exports = {
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": [
        "@babel/plugin-proposal-class-properties",
        [
            "@babel/plugin-transform-runtime",
            {
                "absoluteRuntime": false,
                "corejs": false,
                "helpers": true,
                "regenerator": true
            }
        ]
    ]
};
