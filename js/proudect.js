'use strict';
const foodImg = ['./images/food/birdsfood.jpg','./images/food/catfood.jpg','./images/food/download.jpg','./images/food/Food-And-Water-Dispenser.jpg','./images/food/foodDishes.jpg','./images/food/hamsterFood.jpg','./images/food/hamsterfoods1.jpg','./images/food/images.jpg','./images/food/petsdish.jpg','./images/food/rabbitfood.jpg','./images/food/waterdishes.jpg','./images/food/WildBirdFood.jpg'];
const houseImg = ['./images/house/birdhouse.jpg','./images/house/birdhouse2.jpg','./images/house/birdhouse4.jpg','./images/house/catbed.jpg','./images/house/catdoublebed.jpg','./images/house/cathouse.jpg','./images/house/catWC.jpg','./images/house/dogoutsidehouse.jpg','./images/house/dogwoodhouse.jpg','./images/house/download.jpg','./images/food/hamsterbed1.jpg','./images/food/hamsterBeds.jpg','./images/house/hamsterhouse.jpg','./images/house/hamsterhouse2.jpg','./images/house/hamsterhouse3.jpg','./images/house/hamsterhouse4.jpg','./images/house/Parrot-House-for-2-2Rabbit-1.jpg','./images/house/petsBed.jpg','./images/house/woodbirdhouse.jpg','./images/house/rabbithouse2.jpg',];
const houseimg = ['./images/clothes/catpajama.jpg','./images/clothes/catpajamas.jpg','./images/clothes/catpajamas#1.jpg','./images/clothes/catWoolDress.jpg','./images/clothes/costumes-hamsters.jpg','./images/clothes/dog-clothes-waterproof.jpg','./images/clothes/DogDress.jpg','./images/clothes/dogpajamas.jpg','./images/clothes/hamsterpajama.jpg','./images/clothes/Heartgown Dog Clothes Soft.jpg','./images/food/Parrot-Suit-Blazers.jpg','./images/food/parrot.jpg','./images/clothes/parrot#1.jpg','./images/clothes/parrotDress.jpg','./images/clothes/Pet-Cat-Dress.jpg','./images/clothes/petsclothes.jpg','./images/clothes/rabbit.jpg','./images/clothes/rabbitdress.jpg'];


const Productfood = function (name , src , price ,quantity){
  this.name=name;
  this.src= src;
  this.price=price;
  this.quantity=quantity;
  foodproduct.push(this);
}
let foodproduct = []; 


function generatefood() {
new Productfood =('Keytee Parrot food','./images/food/birdsfood.jpg','15$')
new Productfood =('Whiskas Cat Food','././images/food/catfood.jpg','12$')
new Productfood =('pedigree Dog Food','./images/food/download.jpg','30$')
new Productfood =('Food-And-Water-Dispenser','./images/food/Food-And-Water-Dispenser.jpg','25$')
new Productfood =('Wild Bird Food','images/food/WildBirdFood.jpg','18$')
new Productfood =('rabbit food','./images/food/rabbitfood.jpg','24$')
new Productfood =('water continer','./images/food/waterdishes.jpg','25$')
new Productfood =('Pets Dishes','./images/food/./images/food/petsdish.jpg','18$')
new Productfood =(' food Dish','./images/food/foodDishes.jpg','15$')
new Productfood =('hamster food','./images/food/hamsterFood.jpg','17$')
new Productfood =('cat dish food ','./images/food/images.jpg','40$')
new Productfood =('Menu hamster food','./images/food/hamsterfoods1.jpg','12$')


}
generatefood();

let foodhandle(event){
let foods = document.getElementById('food');
for (i=0 ; i<foodImg.length;i++){
  let maincontent = document.getElementById("col");
  let 
}

}