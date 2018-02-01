// Iteration with a "for" structure to construct repetitive forms.
var y;
var num = 100;

function setup() {

  createCanvas(720, 360);
  background(255);
  noStroke();
     
  // Draw white bars 
  // fill(255);
  y = 60;
  for(var i = 0; i < num; i++) {
    fill(random(200));
    rect(50, y, random(600), 4);
    // y+=20;
    y= y +4;
  }

}