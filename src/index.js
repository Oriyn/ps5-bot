var _ = require("lodash");
var fetch = require('node-fetch');
var afterLoad = require('after-load');


exports.initialize = async () => {
  var siteHtml = [];
  console.log('You have been initialized');
  //var src = await fetch('https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816');


  afterLoad('https://google.com', function(html){
     console.log(html);
  });

  //console.log(src);
};


this.initialize();