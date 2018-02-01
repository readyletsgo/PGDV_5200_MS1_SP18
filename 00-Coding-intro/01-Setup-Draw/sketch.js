var y = 100;

// The statements in the setup() function 
// execute once when the program begins
function setup() {
	// createCanvas must be the first statement
  createCanvas(720, 400);  
  stroke(255);     // Set line drawing color to white
  frameRate(60);
  background(0);   // Set the background to black
}
// The statements in draw() are executed until the 
// program is stopped. Each statement is executed in 
// sequence and after the last line is read, the first 
// line is executed again.
function draw() { 
  // println("hello");
  background(200,0,0);   // Set the background to black
  y = y - 2; 
  if (y < 0) { 
    y = height; 
  } 
  line(0, y, width, y-20);  
} 