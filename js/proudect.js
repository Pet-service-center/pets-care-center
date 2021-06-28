'use strict';

const foodImg = [
  ['Keytee Parrarrot food', './images/food/birdsfood.jpg', '15$'],
  ['Whiskas Cat Food', './images/food/catfood.jpg', '12$'],
  ['pedigree Dog Food', './images/food/download.jpg', '30$'],
  ['Food-And-Water-Dispenser', './images/food/allBirdsfood.jpg', '25$'],
  ['Wild Bird Food', 'images/food/WildBirdFood.jpg', '18$'],
  ['rabbit food', './images/food/rabbitfoods.jpg', '24$'],
  ['water continer', './images/food/waterdishes.jpg', '25$'],
  
  [' food Dish', './images/food/foodDishes.jpg', '15$'],
  ['hamster food', './images/food/hamsterFood.jpg', '17$'],
  ['cat dish food ', './images/food/images.jpg', '40$'],
  ['Menu hamster food', './images/food/hamsterfoods1.jpg', '12$'],
];

const clothesImg = [
  ['Cute cat pajama', './images/clothes/catpajama.jpg', '20$'],
  ['rabbit dress', './images/clothes/rabbitdress.jpg', '15$'],
  ['catWoolDress', './images/clothes/catWoolDress.jpg', '30$'],
  ['costumes-hamsters', './images/clothes/costumes-hamsters.jpg', '25$'],
  [
    'dog-clothes-waterproof',
    './images/clothes/dog-clothes-waterproof.jpg',
    '18$',
  ],
  ['dog pajamas', './images/clothes/dogpajamas.jpg', '27$'],
  ['hamster pajama', './images/clothes/hamsterpajama.jpg', '25$'],
  ['Dog Dress', './images/clothes/DogDress.jpg', '18$'],
  [
    ' Heartgown Dog Clothes Soft',
    './images/clothes/Heartgown Dog Clothes Soft.jpg',
    '35$',
  ],
  ['Parrot Suit Blazers', './images/clothes/Parrot-Suit-Blazers.jpg', '19$'],
  ['parrot dress', './images/clothes/parrot.jpg', '40$'],
  ['parrot Dress', './images/clothes/parrotDress.jpg', '18$'],
];

const houseImg = [
  ['Bird house', './images/house/birdhouse.jpg', '60$'],
  ['Bird house', './images/house/birdhouse2.jpg', '45$'],
  ['Bird house', './images/house/birdhouse4.jpg', '30$'],
  ['Cat bed', './images/house/catbed.jpg', '40$'],
  ['Cat Double bed', './images/house/catdoublebed.jpg', '18$'],
  ['Cat house', './images/house/cathouse.jpg', '27$'],
  ['hamster bed', './images/house/hamsterbed1.jpg', '25$'],
  ['hamster house', './images/house/hamsterhouse2.jpg', '30$'],
  [' Dog outside house', './images/house/dogoutsidehouse.jpg', '135$'],
  ['rabbit house', './images/house/rabbithouse.jpg', '19$'],
  ['Wood bird house', './images/house/woodbirdhouse.jpg', '40$'],
  ['Dog wood house', './images/house/dogwoodhouse.jpg', '78$'],
];
const toolImg = [
  ['cat-toilet', './images/cat-toilet.jpg', '60$'],
  ['cat bag', './images/catbag.jpg', '45$'],
  ['cat shower', './images/catshower.jpg', '30$'],
  ['cat toys', './images/cattoys.jpg', '40$'],
  ['Dog shower tools', './images/dogshowertools.jpg', '18$'],
  ['Dog toys', './images/dogtoys.jpg', '27$'],
  ['Dog travel bag', './images/dogtravelbag.jpg', '25$'],
  [
    'Rabbit & hamster travel bag',
    './images/Rabbit&hamsterTravelBag.jpg',
    '30$',
  ],
  [' Shower tools', './images/Shower-Dog.jpg', '135$'],
  ['pets staris toy', './images/petstairs.jpg', '19$'],
  ['bag for small dog', './images/dogbag.jpg', '40$'],
  ['Dog toys', './images/s.jpg', '78$'],
];

// return random number
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
let idArray=[];
function getId() {
  let id;
  for (let i = 0; i < idArray.length; i++) {
    do {
      id = getRandomInteger(0, 1000);

    } while (id === idArray[i]);
  }
  idArray.push(id);
  return id;
}
const Product = function (name, src, price) {
  this.id = getId();
  this.name = name;
  this.src = src;
  this.price = price;
  this.quantity = 0;
  Product.all.push(this);
};
Product.all = [];

function generate(array) {
  Product.all = [];
  section.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    new Product(array[i][0], array[i][1], array[i][2]);
  }
}

let section = document.getElementById('ProductsImages');


function render() {
  for (let i = 0; i < Product.all.length; i++) {
    let div = document.createElement('div');
    div.setAttribute('id',`no.${i}`);
    section.appendChild(div);
    div.className="card"
    let infoPage= document.createElement('a');
    infoPage.setAttribute('href','./productInfo.html');
    div.appendChild(infoPage);
    let img = document.createElement('img');
    img.src = Product.all[i].src;
    infoPage.appendChild(img);
    let h3 = document.createElement('h3');
    h3.textContent = Product.all[i].name;
    div.appendChild(h3);
    let input = document.createElement('INPUT');
    input.setAttribute('type', 'number');
    input.setAttribute('placeholder', 'Quantity');
    input.setAttribute('min', 0);
    div.appendChild(input);
    let price=document.createElement('h3')
    div.appendChild(price);
    price.textContent= `price  ${Product.all[i].price}  `;

    let btn = document.createElement('BUTTON');
    div.appendChild(btn);
    btn.innerHTML = 'Add to Cart';
    btn.setAttribute('id', Product.all[i].id);
   
  }
 
}

  
  document.addEventListener('click', function(e){
    if(e.target.tagName=="BUTTON"){
    //  alert('BUTTON CLICKED');
    }
  })
// let btn = document.getElementById()

// btn.addEventListener('click', addItem);

function addItem (){
  console.log('111');
  window.location='cart.html';
}

function viewFood() {
  generate(foodImg);
  render();
}

generate(clothesImg);

function viewclothes() {
  generate(clothesImg);
  render();
}

function viewhouse() {
  generate(houseImg);
  render();
}

generate(toolImg);

function viewtools() {
  generate(toolImg);
  render();
}

viewFood();

let cartArr = [];

section.addEventListener('click', addToCard);

function addToCard(event) {

  // add the the event for button only
  if (event.target.textContent == 'Add to Cart') {
    for (let i = 0; i <Product.all.length; i++) {
      // get obj using the ID
      if (Product.all[i].id == event.target.id) {
      cartArr.push([Product.all[i].name , Product.all[i].price]);
      localStorage.setItem('cartItem',cartArr);
      console.log(cartArr);
      //window.location.href='cart.html';

      }

    }

  }
}
console.log(cartArr);
