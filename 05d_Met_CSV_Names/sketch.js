var rs; 
var table;
var textTitle;
var textInfo;
var titles;
var objectIds;
var index =0;

function preload() {
  //my table is comma separated value "csv"
  table = loadTable('MetObjects-sorted-1970-2017.csv', 'csv', 'header');
}

function setup() {
  // no canvas because we're using p5 dom 
  noCanvas();
  textTitle = createElement('span', "");
  textTitle.addClass("type");
  textInfo = createElement('div', "");
  textInfo.addClass("info");

  titles = table.getColumn("Title");
  objectIds = table.getColumn("Object ID");

  frameRate(10);
}

function draw(){

  var word ="";
  while(word==""){
    word = titles[index];
    index++;
  }

  console.log(word);
  textTitle.html(word);
  textInfo.html(objectIds[index]);

  index++;
  if(index>titles.length){
    index=0;
  }
}