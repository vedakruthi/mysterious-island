var bg,bgimg;
var kelly,kimg;
var monster,mimg;
var ghost,gimg;
var canvas;
var story,simg;
var instruction,iimg;
var space_rules,rulesimg;
var gameState = 0;


function preload(){
 bgimg = loadImage("bg.jpg"); 
 kimg = loadAnimation("k1.png","k2.png","k3.png","k4.png","k5.png","k6.png","k7.png","k8.png","k9.png","k10.png","k11.png","k12.png","k13.png","k14.png","k15.png");
simg = loadImage("story4.png");
iimg = loadImage("ins.png");
rulesimg = loadImage("text1.png");
}

function setup() {
  canvas = createCanvas(displayWidth,displayHeight);
  
}

function draw() {
background(0);

image(bgimg,0,0,width,height);

story = createSprite(450,300);
  story.addImage(simg);
  story.scale = 0.8;
  story.visible = false;
  space_rules = createSprite(450,700);
  space_rules.addImage(rulesimg);
  space_rules.visible = false;

  
if(gameState === 0){
  story.visible = true;
  space_rules.visible = true;
  if(gameState === 0 && keyDown("space")){
    instructions();
  }
 
}
drawSprites();  
}

function instructions(){
  story.visible = true;
  space_rules.visible = true;
 instruction = createSprite(450,250);
 instruction.addImage(iimg); 
}

