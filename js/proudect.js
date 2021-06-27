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

const clothesImg = [
  ['Cute cat pajama', './images/clothes/catpajama.jpg', '20$'],
  ['rabbit dress', './images/clothes/rabbitdress.jpg', '15$'],
  ['catWoolDress', './images/clothes/catWoolDress.jpg', '30$'],
  ['costumes-hamsters', './images/clothes/costumes-hamsters.jpg', '25$'],
  ['dog-clothes-waterproof', './images/clothes/dog-clothes-waterproof.jpg', '18$'],
  ['dog pajamas', './images/clothes/dogpajamas.jpg', '27$'],
  ['hamster pajama', './images/clothes/hamsterpajama.jpg', '25$'],
  ['Dog Dress', './images/clothes/DogDress.jpg', '18$'],
  [' Heartgown Dog Clothes Soft', './images/clothes/Heartgown Dog Clothes Soft.jpg', '35$'],
  ['Parrot Suit Blazers', './images/clothes/Parrot-Suit-Blazers.jpg', '19$'],
  ['parrot dress', './images/clothes/parrot.jpg', '40$'],
  ['parrot Dress', './images/clothes/parrotDress.jpg', '18$']
];
//const houseImg = ['./images/house/birdhouse.jpg','./images/house/birdhouse2.jpg','./images/house/birdhouse4.jpg','./images/house/catbed.jpg','./images/house/catdoublebed.jpg','./images/house/cathouse.jpg','./images/house/catWC.jpg','./images/house/dogoutsidehouse.jpg','./images/house/dogwoodhouse.jpg','./images/house/download.jpg','./images/food/hamsterbed1.jpg','./images/food/hamsterBeds.jpg','./images/house/hamsterhouse.jpg','./images/house/hamsterhouse2.jpg','./images/house/hamsterhouse3.jpg','./images/house/hamsterhouse4.jpg','./images/house/Parrot-House-for-2-2Rabbit-1.jpg','./images/house/petsBed.jpg','./images/house/woodbirdhouse.jpg','./images/house/rabbithouse2.jpg',];
//const clothesimg = ['./images/clothes/catpajama.jpg','./images/clothes/catpajamas.jpg','./images/clothes/catpajamas#1.jpg','./images/clothes/catWoolDress.jpg','./images/clothes/costumes-hamsters.jpg','./images/clothes/dog-clothes-waterproof.jpg','./images/clothes/DogDress.jpg','./images/clothes/dogpajamas.jpg','./images/clothes/hamsterpajama.jpg','./images/clothes/Heartgown Dog Clothes Soft.jpg','./images/food/Parrot-Suit-Blazers.jpg','./images/food/parrot.jpg','./images/clothes/parrot#1.jpg','./images/clothes/parrotDress.jpg','./images/clothes/Pet-Cat-Dress.jpg','./images/clothes/petsclothes.jpg','./images/clothes/rabbit.jpg','./images/clothes/rabbitdress.jpg'];
const houseImg = [
  ['Bird house', './images/house/birdhouse.jpg', '60$'],
  ['Bird house', './images/house/birdhouse2.jpg', '45$'],
  ['Bird house', './images/house/birdhouse4.jpg', '30$'],
  ['Cat bed', './images/house/catbed.jpg', '40$'],
  ['Cat Double bed', './images/house/catdoublebed.jpg', '18$'],
  ['Cat house', './images/house/cathouse.jpg', '27$'],
  ['hamster bed', './images/house/hamsterbed.jpg', '25$'],
  ['hamster house', './images/house/hamsterhouse2.jpg', '30$'],
  [' Dog outside house', './images/house/dogoutsidehouse.jpg', '135$'],
  ['rabbit house', './images/house/rabbithouse.jpg', '19$'],
  ['Wood bird house', './images/house/woodbirdhouse.jpg', '40$'],
  ['Dog wood house', './images/house/dogwoodhouse.jpg', '78$']
];
const toolImg = [
  ['Bird house', './images/tool/birdtool.jpg', '60$'],
  ['Bird tool', './images/tool/birdtool2.jpg', '45$'],
  ['Bird tool', './images/tool/birdtool4.jpg', '30$'],
  ['Cat bed', './images/tool/catbed.jpg', '40$'],
  ['Cat Double bed', './images/tool/catdoublebed.jpg', '18$'],
  ['Cat tool', './images/tool/cattool.jpg', '27$'],
  ['hamster bed', './images/tool/hamsterbed.jpg', '25$'],
  ['hamster tool', './images/tool/hamstertool2.jpg', '30$'],
  [' Dog outside tool', './images/tool/dogoutsidetool.jpg', '135$'],
  ['rabbit tool', './images/tool/rabbittool.jpg', '19$'],
  ['Wood bird tool', './images/tool/woodbirdtool.jpg', '40$'],
  ['Dog wood tool', './images/tool/dogwoodtool.jpg', '78$']
];
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
  section.innerHTML='';
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
      div.appendChild(btn);
      btn.innerHTML = 'Add to Cart';
    }


};


 
generate(foodImg);

function viewFood() {
    generate(foodImg);
    //console.log(Product.all);
    render();
};

generate(clothesImg);

function viewclothes() {
  generate(clothesImg);
  //console.log(Product.all);
  render();
}

function viewhouse() {
  generate(houseImg);
  //console.log(Product.all);
  render();
}






