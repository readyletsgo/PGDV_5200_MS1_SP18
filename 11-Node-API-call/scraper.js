// this is calling external modules: you need to install FS, async and request
// for this we need Node installed on our computers
var fs = require('fs');
var async = require('async');
var request = require('request'); 


// here we fill an array with all possible MET objects
// since we don't know the API rates, it' best to do this in ranges, maybe of 10000
// our example's small enough just to test it first:
var base_url = 'https://collectionapi.metmuseum.org/api/collection/v1/object/';
var range = 410;
var complete_url = [ ];
var metObjectCollection = [ ];

for (var i = 400; i < range; i++) {
    complete_url.push(base_url+i);
}

// eachSeries in the async module iterates over an array 
//and operates on each item in the array in series
async.eachSeries(complete_url, function(value, callback) {
    var metObject = new Object;
    metObject.url = value;
    request(value, function(err, resp, body) {
        
        if (err) console.log(err);
        //this brings the whole JSON as a Javascript Object;
        var fullInfo = JSON.parse(body);
        //here we pick what we want from the Met API:
        //Title, Description and an Image
        metObject.title = fullInfo.titles.primaryTitle;
        metObject.extra_info = fullInfo.metadata.metaDescription;
        metObject.image_url = fullInfo.media.images.primaryImage.webImageUrl;
        metObjectCollection.push(metObject);
        
    });
    // wait 5 seconds to execute our function from the one before 
    setTimeout(callback, 5000);
    
}, function() {
    console.log(metObjectCollection);
    fs.writeFileSync('api.json', metObjectCollection);
});