var rs; 
var table;

function preload() {
  //my table is comma separated value "csv"
  table = loadTable('MetObjects-sorted-1970-2017.csv', 'csv', 'header');
}

function setup() {
  // no canvas because we're using p5 dom 
  noCanvas();
  showData();
}


function showData(){
    var count = table.getRowCount();
    for (var i=0; i<2000; i++) {

        var objectName = table.getString(i,2);

        // if the name is longer than 0
        if(objectName.length>0){ 
            // convert the string into a "rita" string
            rs = RiString(objectName);          

            // retrieve words of the titel
            var words = rs.words();
            // retrieve POS tags for title
            var pos = rs.pos();

            // Let's start by creating a container div for each artwork title
            var title = createDiv("");
            title.addClass("title");

            // cycle through all words in the title
            for(var j=0; j<words.length; j++){

                // create one span per word
                var span = createSpan(words[j] + " ");
                span.addClass("type");

              // attach a different class depnending on the POS categorization
              if (pos[j] == 'nnp' || pos[j] == 'nn'  || pos[j] == 'nns' || pos[j] == 'nnps' ) //noun
                  span.addClass("noun");              
              else if (pos[j] === 'jj' || pos[j] === 'jjr'|| pos[j] === 'jjs') //adjective
                  span.addClass("adjective");              
              else if (pos[j] === 'vb' || pos[j] === 'vbg' || pos[j] === 'vbn') //verb
                  span.addClass("verb");              
                  span.parent(title);
            }
          }
    }
}