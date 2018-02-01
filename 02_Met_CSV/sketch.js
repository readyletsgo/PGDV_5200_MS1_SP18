var table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('MetObjects5000.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(10);
  showData();

}


function showData(){
    var count = 100;
    var rowHeight = height/count;
    var ObjectNameTable = table.getColumn('Object Name');
        
    for (var i=0; i<count; i++) {
        var objectName = table.getString(i,5);
        text(objectName, width/2, rowHeight * (i + 1));
    }
}