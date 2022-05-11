// Begin van het spel
var score = 0;
var deaths = 0;

var mand = {
  x: 0,
  y: 400,
  w: 100,
  h: 2 
}
var apple= {
  x: 0,
  y: 0,
  w: 50,
  h: 50
}

// Laden van de plaatjes
function preload() {
  mandimg = loadImage('IMG/basket.png');
  appleimg = loadImage('IMG/apple.png')
}

// Maken van de canvas
function setup() {
  createCanvas(760, 500);
}


function draw() {
  background(135, 206, 235);
  basketDraw();
  appleDraw();
  
  if (apple.x > mand.x - mand.w && apple.x < mand.x + mand.w && apple.y > mand.y - mand.h && apple.y < mand.y + mand.h){
    score = score + 1;
    appleSpawn()
  }
  
  text(`score: ${score}`, 400, 50)
  text(`   deaths: ${deaths}`, 300, 50)
}

function basketDraw(){
  image(mandimg, mand.x,mand.y,mand.w,100)
  mand.x = mouseX-50;
}

//APPLE
function appleDraw(){
  image(appleimg, apple.x, apple.y, apple.w, apple.h)
  apple.y = apple.y +3;
  if(apple.y > 500){
    score = 0;
    deaths = deaths +1;
    appleSpawn()
  }
  if (score >= 3){
    apple.y = apple.y+3.05
  }
}

function appleSpawn(){
    apple.y = 0;
    apple.x = random(100, 800);
    if (score<1){
      text('You died', 100, 100)
    }
}
