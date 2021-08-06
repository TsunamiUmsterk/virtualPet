class Food { constructor () {
     var options; {

     }
     

}

foodStock= this.foodStock;

milkBottle = loadImage("Images/milkImage.png");

     display() {
          var x=80, y=100;

          imageMODE(CENTER);
          if(this.foodStock !== 0) {
               for(var i=0, i< this.foodStock; i++) {
                    if(i%10 == 0) {
                         x = 80;
                         y = y + 50;
                    }
                    image(this.image, x, y, 50, 50);
               }
          }
     }

     addedFood() {
          
     }

     
}