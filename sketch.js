var ball

var database;
var position;

function setup(){
    createCanvas(500,500);

     database = firebase.database();

    ball=createSprite(200,100,70,70)
    ball.shapeColor="brown"


   var ballref = database.ref("ball/position");
   ballref.on("value",readPosition,showError)

}

function draw(){
    background("white");
    if(position!==undefined){

    
    
    if(keyDown("left")){
        writePosition(-4,0)
    }
   else if(keyDown("right")){
    writePosition(4,0)
   }
   else if(keyDown("up")){
    writePosition(0,-4)
   } 
   else if(keyDown("down")){
    writePosition(0,4)
   
}
    drawSprites();
}
}

function changePosition(x,y){
    ball.x = ball.x + x; 
    ball.y = ball.y + y
}

function writePosition(x,y){
  database.ref("ball/position").set({
      x : position.x + x ,
      y : position.y + y
    })

}

function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y

}

function showError(){
    console.log("not able to read values in database")
}
