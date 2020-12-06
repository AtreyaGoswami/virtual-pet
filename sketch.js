
var dogI,happyI,

function preload()
{
  dogI = loadImage("dogimg.png");
  happyI = loadImage("dogimg.png");
  
  

}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogI);
  dog.scale = 0.15;

}


function draw() {  
  background("black")

 
  if(keyWentDown(UP_ARROW)){
    dog.addImage(happyI);

  }

  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogI);
  }

}

















