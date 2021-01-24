var canvas;
var music;
var ball,ob1,ob2,ob3,ob4
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);
ball = createSprite(300,300,30,30);
ob1 = createSprite(90,550,150,10);
ob2 = createSprite(260,550,150,10);
ob3 = createSprite(430,550,150,10);
ob4 = createSprite(600,550,150,10);
ball.shapeColor="white"
ob1.shapeColor="red"
ob2.shapeColor="blue"
ob3.shapeColor="green"
ob4.shapeColor="yellow"
    //create 4 different surfaces

    //create box sprite and give velocity
ball.velocityY=4
ball.velocityX=6
}

function draw() {
    background("black");
    //create edgeSprite
    edges=createEdgeSprites();
    
    if(ball.isTouching(ob1)&&ball.bounceOff(ob1)){
        ball.shapeColor="red"
        music.play();
    }
    if(ball.isTouching(ob3)&&ball.bounceOff(ob3)){
        ball.shapeColor="green"
        music.play();
    }
    if(ball.isTouching(ob2)){
        ball.shapeColor="blue"
        ball.velocityX=0
        ball.velocityY=0
        music.stop();
    }
    if(ball.isTouching(ob4)&&ball.bounceOff(ob4)){
        ball.shapeColor="yellow"
        music.play();
    }
    
ball.bounceOff(edges);
    //add condition to check if box touching surface and make it box
    drawSprites();
}

function isTouching(object1,object2){
    if(object1.x-object2.x<object2.width/2 + object1.width/2
    &&object2.x-object1.x<object1.width/2 + object2.width/2
    &&object1.y-object2.y<object2.width/2 + object1.width/2
    &&object2.y-object1.y<object1.width/2 + object2.width/2) {
    
        return true
    }
    else{
        return false
    }
}