class Food { constructor () {
     this.image = loadImage("Milk.png");
}



     display() {
          var x=80, y=100;

          imageMode(CENTER);
          image(this.image, 720, 220, 70, 70);
          console.log(foodS);

          if(foodS !== 0) {
               for(var i=0; i< foodS; i++) {
                    if(i%15 == 0) {  
                         y = y + 60;
                         x = 80;
                    }
                    image(this.image, x, y, 70, 70);
                    x = x + 40;
               }
          }
     }

     
}