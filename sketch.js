var dog,sadDog,happyDog;
var feedButton, addButton;
var foodObj;
var database;
var foodStock;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feedButton = createButton("Feed the dog");
  feedButton.position(700, 95);
  feedButton.mousePressed(deductFood);

  foodButton = createButton("Add Food");
  foodButton.position(630, 95);
  foodButton.mousePressed(addFoods);

  foodS = new Food(x, y, 30, 30);

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock
function getFoodStock() {
  var foodRef = database.ref("stocks/food");
  foodRef.on("value", function(data){
       foodCount = data.val();
  })
}
//function to update food stock 
function updateFoodStock(value) {
  database.ref('/').update(
      {
          food : value
      } 
  )
  }
//function to add food in stock
function addFoods() {
  foodS++;
  database.ref('/').update({
    food : foodS
  })
}

function feedDog() {
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<=0) {
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  } else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }
}


function deductFood() {
  var foodRef = database.ref("stocks/food");
  foodRef.set({
       food : this.food
  })
}