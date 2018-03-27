/*
Example based on:
Working with Objects using p5.js
Authored by John Kuiphoff

http://coursescript.com/notes/interactivecomputing/objects/index.html
*/

var xPos, yPos, c;
      
function setup()
{
  createCanvas(800, 400);
  xpos = random(width);
  ypos = random(height);
  speed = random(4);
  c = color(random(255), random(255), random(255));

  // car body
  fill(this.c);
  rectMode(CORNER);
  rect(this.xpos, this.ypos, 100, 50);

  // wheels
  fill(0);
  ellipse(this.xpos + 20, this.ypos + 45, 40, 40);
  ellipse(this.xpos + 80, this.ypos + 45, 40, 40);
}