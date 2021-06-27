'use strict';

/*document.querySelectorAll('nav a')
  .forEach(e => e.addEventListener('click', _ => change(e.dataset.id)))


function change(n) {
  let panels = document.querySelectorAll('main div')
  panels.forEach(p => p.classList.remove('active'))
  panels[n - 1].classList.add('active')
}*/

//const foodImg = ['./images/food/birdsfood.jpg','./images/food/catfood.jpg','./images/food/download.jpg','./images/food/Food-And-Water-Dispenser.jpg','./images/food/foodDishes.jpg','./images/food/hamsterFood.jpg','./images/food/hamsterfoods1.jpg','./images/food/images.jpg','./images/food/petsdish.jpg','./images/food/rabbitfood.jpg','./images/food/waterdishes.jpg','./images/food/WildBirdFood.jpg'];
//const houseImg = ['./images/house/birdhouse.jpg','./images/house/birdhouse2.jpg','./images/house/birdhouse4.jpg','./images/house/catbed.jpg','./images/house/catdoublebed.jpg','./images/house/cathouse.jpg','./images/house/catWC.jpg','./images/house/dogoutsidehouse.jpg','./images/house/dogwoodhouse.jpg','./images/house/download.jpg','./images/food/hamsterbed1.jpg','./images/food/hamsterBeds.jpg','./images/house/hamsterhouse.jpg','./images/house/hamsterhouse2.jpg','./images/house/hamsterhouse3.jpg','./images/house/hamsterhouse4.jpg','./images/house/Parrot-House-for-2-2Rabbit-1.jpg','./images/house/petsBed.jpg','./images/house/woodbirdhouse.jpg','./images/house/rabbithouse2.jpg',];
//const clothesimg = ['./images/clothes/catpajama.jpg','./images/clothes/catpajamas.jpg','./images/clothes/catpajamas#1.jpg','./images/clothes/catWoolDress.jpg','./images/clothes/costumes-hamsters.jpg','./images/clothes/dog-clothes-waterproof.jpg','./images/clothes/DogDress.jpg','./images/clothes/dogpajamas.jpg','./images/clothes/hamsterpajama.jpg','./images/clothes/Heartgown Dog Clothes Soft.jpg','./images/food/Parrot-Suit-Blazers.jpg','./images/food/parrot.jpg','./images/clothes/parrot#1.jpg','./images/clothes/Pet-Cat-Dress.jpg']


const foodImg = [
  ['Keytee Parrarrot food', './images/food/birdsfood.jpg', '15$'],
  ['Whiskas Cat Food', './images/food/catfood.jpg', '12$'],
  ['pedigree Dog Food', './images/food/download.jpg', '30$'],
  ['Food-And-Water-Dispenser', './images/food/allBirdsfood.jpg', '25$'],
  ['Wild Bird Food', 'images/food/WildBirdFood.jpg', '18$'],
  ['rabbit food', './images/food/rabbitfoods.jpg', '24$'],
  ['water continer', './images/food/waterdishes.jpg', '25$'],
  ['Pets Dishes', './images/food/petsdish.jpg', '18$'],
  [' food Dish', './images/food/foodDishes.jpg', '15$'],
  ['hamster food', './images/food/hamsterFood.jpg', '17$'],
  ['cat dish food ', './images/food/images.jpg', '40$'],
  ['Menu hamster food', './images/food/hamsterfoods1.jpg', '12$']
];

//const houseImg = ['./images/house/birdhouse.jpg','./images/house/birdhouse2.jpg','./images/house/birdhouse4.jpg','./images/house/catbed.jpg','./images/house/catdoublebed.jpg','./images/house/cathouse.jpg','./images/house/catWC.jpg','./images/house/dogoutsidehouse.jpg','./images/house/dogwoodhouse.jpg','./images/house/download.jpg','./images/food/hamsterbed1.jpg','./images/food/hamsterBeds.jpg','./images/house/hamsterhouse.jpg','./images/house/hamsterhouse2.jpg','./images/house/hamsterhouse3.jpg','./images/house/hamsterhouse4.jpg','./images/house/Parrot-House-for-2-2Rabbit-1.jpg','./images/house/petsBed.jpg','./images/house/woodbirdhouse.jpg','./images/house/rabbithouse2.jpg',];
//const clothesimg = ['./images/clothes/catpajama.jpg','./images/clothes/catpajamas.jpg','./images/clothes/catpajamas#1.jpg','./images/clothes/catWoolDress.jpg','./images/clothes/costumes-hamsters.jpg','./images/clothes/dog-clothes-waterproof.jpg','./images/clothes/DogDress.jpg','./images/clothes/dogpajamas.jpg','./images/clothes/hamsterpajama.jpg','./images/clothes/Heartgown Dog Clothes Soft.jpg','./images/food/Parrot-Suit-Blazers.jpg','./images/food/parrot.jpg','./images/clothes/parrot#1.jpg','./images/clothes/parrotDress.jpg','./images/clothes/Pet-Cat-Dress.jpg','./images/clothes/petsclothes.jpg','./images/clothes/rabbit.jpg','./images/clothes/rabbitdress.jpg'];


const Product = function (name, src, price) {
  this.name = name;
  this.src = src;
  this.price = price;
  this.quantity = 0;
  Product.all.push(this);
}
Product.all = [];


function generate(array) {
  Product.all = [];
  for (let i = 0; i < array.length; i++) {
    new Product(array[i][0], array[i][1], array[i][2]);
  }


}

let section = document.getElementById('ProductsImages');

function render() {
    for (let i = 0; i < Product.all.length; i++) {
      let div = document.createElement('div');
      section.appendChild(div);
      let img = document.createElement('img');
            img.src = Product.all[i].src;
            div.appendChild(img);
      let h3 = document.createElement('h3');
      h3.textContent = Product.all[i].name;
      div.appendChild(h3);
      let input = document.createElement("INPUT");
      input.setAttribute("type", "number");
      input.setAttribute("placeholder", "Quantity");
      div.appendChild(input);
      var btn = document.createElement("BUTTON");   // Create a <button> element
      btn.innerHTML = 'Add to Cart';
    }


 }

generate(foodImg);
  console.log(Product.all);
  render();

  
function viewFood() {
    generate(foodImg);
    //console.log(Product.all);
    render();
  }
  viewFood();
// generatefood();

// let foodhandle(event){
// let foods = document.getElementById('food');
// for (i=0 ; i<foodImg.length;i++){
//   let maincontent = document.getElementById("col");
//   let 
// }

// }

