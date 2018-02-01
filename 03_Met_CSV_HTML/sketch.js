var table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('MetObjects5000.csv', 'csv', 'header');
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  noCanvas();
  // textSize(10);
  showData();

}


function showData(){
    var count = table.getRowCount();
    var rowHeight = height/count;
    var ObjectNameTable = table.getColumn('Object Name');
        
    for (var i=0; i<count; i++) {
        var objectName = table.getString(i,5);
        var span = createSpan(objectName + " ");
        if(objectName=="Coin"){
          span.addClass("highlight");
        }
    }
}