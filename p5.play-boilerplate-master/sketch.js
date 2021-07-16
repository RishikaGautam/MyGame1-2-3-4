var backgr;
var healthLogo, earthLogo, healthLogoImg, earthLogoImg, mathLogoImg, physicsLogoImg;
var albert, albertImg;
var keyBoard, keyBoardImg, mathLogo, physicsLogo;
var gameState = 'start';
var score = 0;
var correct; 
var incorrect;
var answer; 

function preload(){
  backgr = loadImage('background.jpg');
  healthLogoImg = loadImage('sprite_0.png');
  earthLogoImg = loadImage('earth0.png');
  albertImg = loadImage('boy0.png');
  keyBoardImg = loadImage('keyboard0.png');
  mathLogoImg = loadImage('mathLogo0.png');
  physicsLogoImg = loadImage('physicsLogo0.png');

}
function setup() {

  createCanvas(windowWidth,windowHeight);
  healthLogo = createSprite(windowWidth - 200, windowHeight - 200, 75,75);
  healthLogo.scale = 0.6;
  healthLogo.addImage(healthLogoImg);
  earthLogo = createSprite(windowWidth - 200, windowHeight - 500, 75, 75);
  earthLogo.scale = 0.6;
  earthLogo.addImage(earthLogoImg);
  keyBoard = createSprite(windowWidth/2, windowHeight/2 , 75,75);
  keyBoard.scale = 1.5;
  keyBoard.addImage(keyBoardImg);
  mathLogo = createSprite(windowWidth - 1800, windowHeight - 200, 75, 75);
  mathLogo.scale = 1.0;
  mathLogo.addImage(mathLogoImg);
  physicsLogo = createSprite(windowWidth - 1800, windowHeight - 500, 75, 75);
  physicsLogo.scale = 0.25;
  physicsLogo.addImage(physicsLogoImg);
  albert = createSprite(windowWidth - 90, windowHeight - 50, 100,100);
  albert.scale = 0.9;
  albert.addImage(albertImg);


  
}

function draw() {
  background(backgr);  
  
  if(gameState === 'start'){
    healthLogo.visible = true;
    earthLogo.visible = true;
    mathLogo.visible = true;
    physicsLogo.visible = true;
    albert.visible = false;
    
  }

  if(gameState === 'play'){

    

    if(score === 5){
      gameState = 'over';
    }

  }

  if(gameState === 'over'){
    textSize(45);
    fill('white');
    noStroke();
    strokeWeight(4);
    text('Game Over! Good Job!', windoWidth/2, windowHeight/2);
  }

  if(mousePressedOver(healthLogo) && gameState === 'start' ){

    gameState = 'play';
    albert.x = windowWidth-200;
    albert.y = windowHeight-200;
    albert.visible = true;
    healthLogo.visible = false;
    Health();
  } 
  if(mousePressedOver(earthLogo) && gameState === 'start'){
    
    gameState = 'play';
    albert.visible = true;
    albert.x = windowWidth - 200;
    albert.y = windowHeight - 600;
    earthLogo.visible = false;
    Earth();
  } 

  if(mousePressedOver(mathLogo) && gameState === 'start'){

    gameState = 'play';
    albert.visible = true;
    albert.x = windowWidth - 1800;
    albert.y = windowHeight - 200;
    mathLogo.visible = false;
    Mathematics();
  }
  
  if(mousePressedOver(physicsLogo) && gameState === 'start'){

    gameState = 'play';
    albert.visible = true;
    albert.x = windowWidth - 1800;
    albert.y = windowHeight - 600;
    physicsLogo.visible = false;
    Physics();
  }

  drawSprites();

  
}

function Earth (){
  var rand = Math.round(random(1,5));
  textSize(30);
  stroke(0);
  fill('black');
  switch(rand){
    case 1: text("What is Earth's largest continent?", windowWidth - 525, windowHeight - 730);
    break;
    case 2: text("What is the driest place on Earth?", windowWidth - 525, windowHeight - 730);
    break;
    case 3: text("What country has the most natural lakes?", windowWidth - 625, windowHeight - 730);
    break;
    case 4: text("Which African country has the most pyramids?", windowWidth - 625, windowHeight - 730);
    break;
    case 5: text("What is the only sea without any coast?", windowWidth - 525, windowHeight - 730);
    break;
    default : break;
  }

}

function Health(){
  var rand = Math.round(random(1,5));
  textSize(30);
  stroke(0);
  fill('black');
  switch(rand){
    case 1: text("What is the longest type of cell in the body?", windowWidth - 525, windowHeight - 230);
    break;
    case 2: text("What is the hardest substance in the human body?", windowWidth - 525, windowHeight- 230);
    break;
    case 3: text("What is the largest organ in the human body?", windowWidth - 525, windowHeight - 230);
    break;
    case 4: text("Which mammel can fly?", windowWidth - 525, windowHeight - 230);
    break;
    case 5: text("What is the largest known insect?", windowWidth - 525, windowHeight - 230);
    break;
    default : break;
  }

}

function Mathematics(){
  var rand = Math.round(random(1,5));
  textSize(30);
  stroke(0);
  fill('black');
  switch(rand){
    case 1: text("What is the square root of 256?", windowWidth - 525, windowHeight - 230);
    break;
    case 2: text("What is 253 multiplied by 89? ", windowWidth - 525, windowHeight- 230);
    break;
    case 3: text("What is 988 divided by 4?", windowWidth - 525, windowHeight - 230);
    break;
    case 4: text("What is 23 to the power of 2?", windowWidth - 525, windowHeight - 230);
    break;
    case 5: text("What is the square root of 324?", windowWidth - 525, windowHeight - 230);
    break;
    default : break;
  }

}

function Physics(){
  var rand = Math.round(random(1,4));
  textSize(30);
  stroke(0);
  fill('black');
  switch(rand){
    case 1: text("Is electromagnetism part of physics?", windowWidth - 525, windowHeight - 230);
    break;
    case 2: text("Who is the father of physics?", windowWidth - 525, windowHeight- 230);
    break;
    case 3: text("Does light travel in a straight line?", windowWidth - 525, windowHeight - 230);
    break;
    case 4: text("Is Light a particle or wave?", windowWidth - 525, windowHeight - 230);
    break;
    default : break;
  }

}