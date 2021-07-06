var dog, hDog, database, foodS, foodStock
var dogImg, hdogImg;
var milk, milkImg;


function preload()
{
  dogImg = loadImage("dogImg.png");
  hdogImg = loadImage("dogImg1.png");
  milkImg = loadImage("milk.gif");
  

}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;


  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  foodStock.set(50);
  
  milk = createSprite(140,435,10,10);
  milk.addImage(milkImg);
  milk.scale = 0.025;

  milk1 = createSprite(210,280,10,10);
  milk1.addImage(milkImg);
  milk1.scale = 0.025;
  milk1.visible = false;

}

function draw() {  
  background("pink")

  if(foodS !== 0){
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(hdogImg);
    milk1.visible = true;

   
  }

  if(keyWentUp(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg);
    milk1.visible = false;
  }
}

if(foodS == 0){
  
  dog.addImage(dogImg);
  foodS = 50;

}



  drawSprites();
  textSize(17);
  fill("black");
  text("I am Hungry ",100,150);
  fill("black");
  text("Press up arrow key to feed ",50,50);
  fill("black");
  text("Milk Bottles Remaining  "+foodS,170,440);
}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    food:x
  })
}

