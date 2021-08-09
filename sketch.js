var dog,sadDog,happyDog;
var feedButton, addButton;
var foodObj;
var database;
var foodStock;
var foodS = 0;



function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,1000);

  database = firebase.database();

  getFoodStock();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feedButton = createButton("Feed the dog");
  feedButton.position(700, 95);
  feedButton.mousePressed(feedDog);

  foodButton = createButton("Add Food");
  foodButton.position(630, 95);
  foodButton.mousePressed(addFoods);

  foodObj = new Food();

}

function draw() {
  background(46,139,87);
  drawSprites();

  foodObj.display();
}

//function to read food Stock
function getFoodStock() {
  var foodRef = database.ref("stocks/food");
  foodRef.on("value", function(data){
       foodS = data.val();
  })
}
//function to update food stock 
function updateFoodStock(value) {
  database.ref('stocks').update(
      {
          food : value
      } 
  )
  }
//function to add food in stock
function addFoods() {
  foodS++;
  database.ref('stocks').update({
    food : foodS
  })
}

function feedDog() {
  dog.addImage(happyDog);

  if(foodS >=0) {
    updateFoodStock(foodS-1);
  } else{
    updateFoodStock(0);
  }
}


function deductFood() {
  var foodRef = database.ref("stocks/food");
  foodRef.set({
       food : foodObj.food
  })
}