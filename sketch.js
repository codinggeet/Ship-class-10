var ship1;
var sea_image;
var sea;
var ship; 


function preload(){
ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_image=loadImage("sea.png");

}



function setup(){
  createCanvas(400,400);

  sea=createSprite(400,200);
  sea.addImage(sea_image);


  sea.velocityX=-3;
  sea.scale=0.3
  ship=createSprite(150,190,12,30);
  ship.addAnimation("movingship",ship1);
  ship.scale=0.3 

}

function draw() {


  background("blue");

  if(sea.x<0)
  {
    sea.x=sea.width/8;
  }

 



  drawSprites();
}