var position = { x : 0, y: 300 };
var target = { x : 400, y: 50 };
var tween = new TWEEN.Tween(position).to(target, 800);
tween.easing(TWEEN.Easing.Sinusoidal.Out);

function setup() {
 	createCanvas(800,600); 
  tween.start();
}


function draw(){
  background(255);
  TWEEN.update();
  rect(position.x, position.y,50, 50);

}

tween.onUpdate(function(){
    console.log(position.x);
});
