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
        
    for (var i=0; i<count; i++) {
        var objectName = table.getString(i,5);
        var span = createSpan(objectName + " | ");
        if(objectName=="Coin"){
          span.addClass("highlight");
        }
    }
}