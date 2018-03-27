var cars = [];
      
function setup()
{
  createCanvas(800, 400);
  
  // make 25 cars
  for(var i = 0; i < 25; i++)
  {
    cars[i] = new Car();
  }
}
 
function draw()
{
  // clear background
  background(255);
  
  // loop through each car
  for(var i = 0; i < cars.length; i++)
  {
    cars[i].drive();
    cars[i].display();
  }      
  
}
 
// car constructor
function Car(ypos, speed)
{
  this.xpos = random(width);
  this.ypos = random(height);
  this.speed = random(4);
  this.c = color(random(255), random(255), random(255));
 
  // drive method
  this.drive = function()
  {
    if(this.xpos > width)
    {
      this.xpos = -200; // start offscreen
      this.ypos = random(height);
    }
    this.xpos = this.xpos + this.speed;        
  }
 
  // display method
  this.display = function()
  {
    // body of the car
    fill(this.c);
    rectMode(CORNER);
    rect(this.xpos, this.ypos, 100, 50);
 
    // wheels
    fill(0);
    ellipse(this.xpos + 20, this.ypos + 45, 40, 40);
    ellipse(this.xpos + 80, this.ypos + 45, 40, 40);
  }
}