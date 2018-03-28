// var y = 0;
var x = 0;
var isDrawing = false;
var xEnd = 200;

// var myVar = setInterval(drawLineToPoint, 500);


function setup() {
  createCanvas(720, 400);  
  stroke(255);     // Set line drawing color to white
  frameRate(60);
  background(0);   // Set the background to black
}

function mousePressed(){
  // console.log("mousePressed");
  // drawOneLine();
  isDrawing=true;
}

function drawOneLine(){
  stroke(255,0,0 );
  line(0,random(height),width,random(300));
}



function drawLineToPoint(){
  line(0,300,x,300);
  
    x++;  
    if(x>xEnd){
      x=0;
      isDrawing=false;
      // noLoop();
    }
    // isDrawing = false;
  
}



function draw(){

  if(isDrawing){
    drawLineToPoint();
    console.log("drawing " + frameCount);
  }
  // background(0);
}