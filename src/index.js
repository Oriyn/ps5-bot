var _ = require("lodash");
var fetch = require('node-fetch');
var afterLoad = require('after-load');


exports.initialize = async () => {
  var siteHtml = [];
  console.log('You have been initialized');
  //var src = await fetch('https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816');


  var src = await afterLoad('https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816');

  console.log(src);
};


this.initialize();