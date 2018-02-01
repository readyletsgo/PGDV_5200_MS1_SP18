
/*
An array is a list of data. Each piece of data in an array 
is identified by an index number representing its position 
in the array. Arrays are zero based, which means that the 
first element in the array is [0], the second element is [1], 
and so on. 
*/

//a numbers array
var years = [1980, 1984, 1988];

//a string array
var cities = ["Moscow", "Los Angeles", "Seoul"];

//a boolean array (true or false)
var winUSA = [false, true, false];

// starting position for the drawing
var xPos = 50;
var yPos = 50;

// setup
function setup(){

  createCanvas(800, 600);
  textSize(20);  

  println(years[3]);

  // writing the headers

  // textStyle(BOLD);
  // text("Year", xPos, yPos);
  // text("City", xPos+150, yPos);
  // text("Was US the top nation?", xPos+300, yPos);

  // writing the 3 columns in rows
  textStyle(NORMAL);
  
  yPos = yPos+30;

  for(var i=0; i<3; i++){
    text(years[i], xPos, yPos+i*30);
    text(cities[i], xPos+150, yPos+i*30);
    text(winUSA[i], xPos+300, yPos+i*30);
  }
  
  
}