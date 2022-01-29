var player1, player2, background, backgroundMusic, trafficImg;
var player1Img, player2Img, backgroundImg;
var players = [];
var obstacle, obstacle2, player1InGame, player2InGame;

function preload(){
  player1Img = loadImage("traffic.png");
  player2Img = loadImage("traffic2.png");
  trafficImg = loadImage("PlayerCar.png");
  backgroundImg = loadImage("background.jpg");
}

function setup() {
  createCanvas(1500,3000);

   backgroundSprite = createSprite(800, 0, 50, 50);
   backgroundSprite.addImage(backgroundImg);
   if(backgroundSprite.y < 0){
     backgroundSprite.y = height/2;
   }

   player1 = createSprite(650, 2950, 50, 50);
   player1.addImage(player1Img); 
   player1.scale = 0.1;

   player2 = createSprite(800, 2950, 50, 50);
   player2.addImage(player2Img);
   player2.scale = 0.1;

   obstacle = createSprite(random(600,1000),2000, 50, 50);
   obstacle.addImage(trafficImg);
   obstacle.scale = 0.25;

   obstacle2 = createSprite(random(600,1000),2000, 50, 50);
   obstacle2.addImage(trafficImg);
   obstacle2.scale = 0.25;

   player1InGame = true;
   player2InGame = true;
   
   alert("Controls and Objective, player1 uses keys a and d to turn and player2 uses j and l to turn. Avoid the blue cars and reach the finish line. Press W to Start after pressing the OK button On this Popup");

   //players = [player1, player2];
}

function draw() {
  background("white");
  
  //controls
  if(keyDown("w")){
    backgroundSprite.velocityY = 10;
    obstacle2.velocityY = 10;
    obstacle.velocityY = 10;
  }

  if(keyDown("a")){
    player1.x -= 5;
  }

  if(keyDown("d")){
    player1.x += 5;
  }

  if(keyDown("j")){
    player2.x -= 5;
  }

  if(keyDown("l")){
    player2.x += 5;
  }

  //barrier
  if(player1.x >= 1100){
    player1.x -= 10;
  }

  if(player1.x <= 350){
    player1.x += 10;
  }

  if(player2.x >= 1100){
    player2.x -= 10;
  }

  if(player2.x <= 350){
    player2.x += 10;
  }

  if(obstacle.y >= 2950){
    obstacle.y = 2000;
    obstacle.x = random(600,1000);
  }

  if(obstacle2.y >= 2950){
    obstacle2.y = 2000;
    obstacle2.x = random(600,1000);
  }

  if(player1.isTouching(obstacle) || player1.isTouching(obstacle2) && player1InGame === true){
    player1.destroy();
    player1InGame = false;
    alert("Player2 Won The Game! Reload the page to play again!");
  }

  if(player2.isTouching(obstacle) || player2.isTouching(obstacle2) && player2InGame === true){
    player2.destroy();
    player2InGame === false;
    alert("Player1 Won The Game! Reload the page to play again!");
  }

  if(backgroundSprite.y > 6700){
    alert("Both Players Have Won The Game! Reload the page to play again!");
  }

  //camera.position.y = players.position.y;

  drawSprites();
}
