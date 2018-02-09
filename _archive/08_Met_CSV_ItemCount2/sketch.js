var table;

var allYears = [];

var minObjects, maxObjects, minYear, maxYear;
var margin = 150;
var totalObjects =0;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('MetObjects-sorted-1970-2017.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log("hello world");
  analyzeData();
  displayData();
  
}

function analyzeData(){
    var count = table.getRowCount();
    
    var yearNow = {};
    yearNow.year = int(table.getString(0,3));
    yearNow.items = table.findRows(String(yearNow.year),3);
    append(allYears, yearNow);
    totalObjects+=yearNow.items.length;

  minObjects = 100000;
  maxObjects = 0;
  minYear = null;
  maxYear = null;

  for (var i=0; i<count; i++) {
      var year = int(table.getString(i,3));
      if(year!=yearNow.year){
        var yearNow = {};
        yearNow.year = year;
        yearNow.items =[];
        yearNow.items = table.findRows(String(yearNow.year),3);
        append(allYears, yearNow);
        totalObjects+=yearNow.items.length;

        if(yearNow.items.length>maxObjects){
          maxObjects = yearNow.items.length;
          maxYear = allYears.length-1;
        }
        if(yearNow.items.length<minObjects){
          minObjects = yearNow.items.length;
          minYear = allYears.length-1;
        }
     }
  }
  console.log("The Year " + allYears[maxYear].year + " has the most objects with " + allYears[maxYear].items.length + " items.");
  console.log("The Year " + allYears[minYear].year + " has the least objects with " + allYears[minYear].items.length + " items.");
  // console.log("Within this time period we have " + totalObjects + " objects total.");
}

function displayData(){

  noStroke();
  fill(255,0,0);
  for(var i=0; i<allYears.length; i++){
    var x = map(i,0,allYears.length, margin, width-margin);
    var y = height/2;

    var size = map(allYears[i].items.length,0,maxObjects, );

    for(var j=0; j<allYears[i].items.length; j++){
      var y = map(j,0,maxObjects,height-margin, margin);
      ellipse(x,y, 2, 2);
    }
  }
}




