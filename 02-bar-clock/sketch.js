var xPos = 20; // starting x position to draw
var yPos = 20;  // starting y position to draw
var barHeight = 180; // height of each bar
var barMax = 760; // maximum width of each bar <-- this changes over time

//this gets called only once in the very beginning
function setup() {
	createCanvas(800,600);
}

//this gets called every frame (about 60 frames per second)
function draw() {
  background(0);
  fill(255, 0, 0);

  var h = map(hour(), 0, 60, 0, barMax); // Map the function hour() to values from 0 - barMax
  var m = map(minute(), 0, 60, 0, barMax); // Map the function minute() to values from 0 - barMax
  var s = map(second(), 0, 60, 0, barMax); // Map the function second() to values from 0 - barMax

  //draw 3 background bars to indicate the max width
  fill(30, 0, 0);
  rect(xPos,yPos,barMax,barHeight);   
  rect(xPos,yPos + barHeight + 10,barMax,barHeight);   
  rect(xPos,yPos + barHeight*2 + 20,barMax,barHeight); 

  fill(80, 0, 0);
  rect(xPos,yPos,h,barHeight);   // Bar for hours
  fill(150, 0, 0);
  rect(xPos,yPos + barHeight + 10,m,barHeight);   // Bar for minutes
  fill(255, 0, 0);
  rect(xPos,yPos + barHeight*2 + 20,s,barHeight);   // Bar for seconds
}

