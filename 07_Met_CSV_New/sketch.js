var table;

// var years = [][];
var allObjects = [];

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('test2-sorted-1970-2017.csv', 'csv', 'header');
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  noCanvas();
  // textSize(10);
  console.log("hello world");
  analyzeData();
}


function analyzeData(){
    var count = table.getRowCount();
 
    console.log(count);

    var objects = {};
    objects.year = table.getString(0,3);
    objects.items = table.findRows(objects.year,3);
    append(allObjects, objects);

    for (var i=0; i<count; i++) {
      var year = table.getString(i,3);
      if(year!=objects.year){
        var objects = {};
        objects.year = year;
        objects.items = table.findRows(objects.year,3);
        append(allObjects, objects);
     }
  }
}


function displayData(){

}


