
var dog, happyDog, database,  foodStock
var dog1, dogHappy;
var milk, milkI;


function preload()
{
  dog1 = loadImage("Dog.png");
  Happydog = loadImage("happydog.png");
  milkI = loadImage("milk.png");
  

}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;

  emo = createSprite(200,200,1,1);
  
  foodstock = database.ref('food');
  foodstock.on("value",readstock);
  foodstock.set(50);
  
  milk = createSprite(140,435,10,10);
  milk.addImage(milkI);
  milk.scale = 0.025;

  milk1 = createSprite(210,280,10,10);
  milk1.addImage(milkI);
  milk1.scale = 0.025;
  milk1.visible = false;

}


function draw() {  
  background("blue")

  if(foodS !== 0){
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(HappydogI);
    milk1.visible = true;

   
  }


if(foodS == 0){
  
  dog.addImage(dogI);
  foodS = 50;

}



  drawSprites();
  textSize(17);
  fill("black");
  text("I am your Puppy please feed me I am Hungry ",100,150);
  fill("black");
  text("Long Press up arrow key to feed  Dog ",50,50);
  fill("black");
  text("Milk Bottles Remaining  "+foodS,170,440);

  }
}


