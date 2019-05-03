var position = {x: window.innerWidth};
var target = {x: 2 };
var tween = new TWEEN.Tween(position).to(target, 2000);
tween.easing(TWEEN.Easing.Sinusoidal.Out);

var gitdata;
var width = width;
var height = height;

//preloading our data
function preload() {
  gitdata = loadJSON("repos.json");
}

function setup() {
 	createCanvas(windowWidth,windowHeight); 
 	// console.log(gitdata)
  tween.start();
}

function draw(){
  background('lightpink');
  for (var i=0; i<gitdata.length; i++) {
    // console.log(gitdata[i].size);
    textSize(20);
    textFont('Helvetica');
    var y = map(gitdata[i].size, 10000, 1000000, 100, windowHeight-100);
    // console.log(x);
    var x = map(gitdata[i].stargazers_count, 10000, 1000000, 100, windowWidth-100);
    fill(18, 143, 226, 120);
    TWEEN.update();
    text(gitdata[i].name, position.x*x, y);
  }
}

tween.onUpdate(function(){
    console.log(position.x);
});