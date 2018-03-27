var car;
      
function setup()
{
  createCanvas(800, 400);
  
  // make 25 cars
  car = new Car();
  car.display();
}
 
// car constructor
function Car(ypos, speed)
{
  this.xpos = random(width);
  this.ypos = random(height);
  this.c = color(random(255), random(255), random(255));
  
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