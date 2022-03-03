//const merge = require('webpack-merge');
const common = require('./webpack.common.js');

var config = require('./webpack.dev.js');


/*
config = merge(config, {    
    entry: {
        helloworld: "./src/helloworld.jsx",
        tutorial: "./src/tutorial.jsx",
    },
    
});
*/

/*
var entries = {};
var additional_entries = glob.sync('./additional_entries.js');
if(additional_entries.length>0){
    entries = require('./additional_entries.js');
}
*/

/*
config.entry = Object.assign({}, config.entry, {
    helloworld: "./src/helloworld.jsx",
    tutorial: "./src/tutorial.jsx",
});
*/



var config2 = require('./webpack.prod.js');


var entry = {
    
    //contentBuilderDashboard:    "./src/entry/contentBuilderDashboard.jsx",
    
    //tutorial:                   "./src/tutorial.jsx",
    //helloworld:                 "./src/helloworld.jsx",
    

    pageframe:                  "./src/entry/pageframe.jsx",
    //costComponentProducts:      "./src/entry/costComponentProducts.jsx",
    //costComponentProducts:      "./src/entry/costComponentProducts.jsx",
    //copywriterDashboard:        "./src/entry/copywriterDashboard.jsx",
    //contentBuilderDashboard:    "./src/entry/contentBuilderDashboard.jsx",
    //itinerary:                  "./src/entry/itinerary.jsx",
    benefits:                    "./src/entry/benefits.jsx"

}

config.entry = entry;
config2.entry = entry;

//console.log(config);
//console.log(config2);
//process.exit();

//module.exports = config;
module.exports = [config, config2];                
