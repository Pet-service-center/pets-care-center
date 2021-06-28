'use strict';

const foodImg = [
  ['Keytee Parrarrot food', './images/food/birdsfood.jpg', '15', 'Clean, high quality, wholesome seeds and grains with all the natural protein, fiber, oils, and nutrients of whole grains'],
  ['Whiskas Cat Food', './images/food/catfood.jpg', '12','Dry Cat Food, Ocean Fish flavor with milk This is a Non-vegetarian product.Made with high quality ingredients.No artificial flavourings or preservatives.A perfect balance of vitamins and minerals.'],
  ['pedigree Dog Food', './images/food/download.jpg', '30',' Adult Complete Nutrition Roasted Chicken, Rice & Vegetable Flavor Dry Dog Food is formulated to give dogs all of the energy and nourishment .This chicken-flavor dog food is packed with B vitamins, zinc and omega-6 fatty acid .contains leading levels of the antioxidant, vitamin E. '],
  ['Food-And-Water-Dispenser', './images/food/allBirdsfood.jpg', '25','White Millet, Oats, Sun-Cured Timothy Hay, Wheat, Sun-Cured Alfalfa Hay, Corn, Sunflower Seeds, Red Milo, Flaked Peas, Flaked Beans, Peanuts, Yellow Peas, Flaked Carrots, Flaked Corn, Soybean Hulls, Dried Beet Pulp (sugar removed).'],
  ['Wild Bird Food', 'images/food/WildBirdFood.jpg', '18','Attracts a wide variety of birds Seed mix is perfect for hopper feeders, platform feeders and tube feedersContains millet, black oil sunflower seed, cracked corn, wheat and vitaminsMade in the USA'],
  ['rabbit food', './images/food/rabbitfoods.jpg', '24','high-quality mix that contains all of the natural protein, fiber, oils and nutrients of whole grains. Fortified to ensure a balance blend, Supreme utilizes natural seeds, grains and pellets to provide your small pet with a simple yet healthy diet.'],
  ['water continer', './images/food/waterdishes.jpg', '25','Clear High Quality Accrylic Plastic finish-Dishwasher safe. Design blends in with any decor.20 year patented proven design - Hand made in U.S.A.Two Height adjustments 7" and 9" off the ground. Fits most small to medium sized dogs.'],
  ['Rabbit Food', './images/food/rabbitfood.jpg', '25','A healthy, all-natural blend of species-appropriate dried mixed fruits, seeds, grains, nuts and pre-cooked legumes.Enhanced with vitamins, minerals and amino acids.Added DHA omega-3 and -6 fatty acids contribute valuable antioxidants.Protected probiotics deliver beneficial gut bacteria.Includes no artificial colors, flavors or preservatives.'],

  [' food Dish', './images/food/foodDishes.jpg', '15','Non-Skidding & Flipping - The bone-shaped base is made of food-grade silicone, and it is designed to better hold the bowls and prevent them from tipping and skidding when your dog is eating.No-Spill Silicone Mat- The raised silicone mat edge can catch most spills and splashes and keep your floor clean, and also save you much pet food and time'],
  ['hamster food', './images/food/hamsterFood.jpg', '17','White Millet, Oats, Sun-Cured Timothy Hay, Wheat, Sun-Cured Alfalfa Hay, Corn, Sunflower Seeds, Red Milo, Flaked Peas, Flaked Beans, Peanuts, Yellow Peas, Flaked Carrots, Flaked Corn, Soybean Hulls, Dried Beet Pulp (sugar removed).'],
  ['cat dish food ', './images/food/images.jpg', '40','Cat Food Bowls Set,Raised Cat Bowls for Food and Water,Ceramic Elevated Pet Dishes Bowls with Stand,12 oz Cats and Small Dogs Bowls,Dishwasher Safe'],
  ['Menu hamster food', './images/food/hamsterfoods1.jpg', '12','Contains essentials vitamins, minerals & trace elementsGood quality extruded productsLinoleic acid and amino acids added Sugar less recipe, no artificial flavoring'],
];

const clothesImg = [
  ['Cute cat pajama', './images/clothes/catpajama.jpg', '20','Adorable cute coton cat pajama'],
  ['rabbit dress', './images/clothes/rabbitdress.jpg', '15','rabbit dress fit for small rabbit size 10-50cm'],
  ['catWoolDress', './images/clothes/catWoolDress.jpg', '30','cat wool warm dress from USA'],
  ['costumes-hamsters', './images/clothes/costumes-hamsters.jpg', '25','costumes for hamster '],
  ['dog-clothes-waterproof','./images/clothes/dog-clothes-waterproof.jpg','18','waterproof dos suit fit for large dogs only over 40kg weight'],
  ['dog pajamas', './images/clothes/dogpajamas.jpg', '27'/'pajama made from coton 90% easy to clean and storage'],
  ['hamster pajama', './images/clothes/hamsterpajama.jpg', '25','warm pajama for small-medium hamster'],
  ['Dog Dress', './images/clothes/DogDress.jpg', '18','dress for dog '],
  [' Heartgown Dog Clothes Soft','./images/clothes/Heartgown Dog Clothes Soft.jpg','35','Heartgown Dog Clothes Soft'],
  ['Parrot Suit Blazers', './images/clothes/Parrot-Suit-Blazers.jpg', '19','Parrot Suit Blazers'],
  ['parrot dress', './images/clothes/parrot.jpg', '40','parrot dress'],
  ['parrot Dress', './images/clothes/parrotDress.jpg', '18','parrot dress'],
];

const houseImg = [
  ['BIRD CAGE', './images/house/birdhouse.jpg', '60','METAL DECOR IDEAS USING BIRD CAGE'],
  ['Bird house', './images/house/birdhouse2.jpg', '45','outside preety bird house from stone '],
  ['Cat pillowe', './images/house/catbed.jpg', '40','comfortable cat pillowe '],
  ['Cat Double bed', './images/house/catdoublebed.jpg', '18','pink  doubled bed for small cat'],
  ['Cat house', './images/house/cathouse.jpg', '27','pink meduim cat house only inside the house'],
  ['hamster bed', './images/house/hamsterbed1.jpg', '25','comfortable a hamster bed made in china only on color'],
  ['hamster house', './images/house/hamsterhouse2.jpg', '30','hamster bed for all sizes of hamster made in india'],
  [' Dog outside house', './images/house/dogoutsidehouse.jpg', '135','dog outside house made of wood for all size of dog '],
  ['rabbit house', './images/house/rabbithouse.jpg', '19','rabbit outside houses fit to 5-6 rabbits 120X150 cm'],
  ['Wood bird house', './images/house/woodbirdhouse.jpg', '40','wood  bird house made of 100% wood'],
  ['Dog wood house', './images/house/dogwoodhouse.jpg', '78','wood dog house for large-meduim dog'],
  ['Bird house', './images/house/birdhouse4.jpg', '30','BIRD CAGEMETAL DECOR IDEAS USING BIRD CAGE'],
];
const toolImg = [
  ['cat-toilet', './images/cat-toilet.jpg', '60','Specially Designed Training Seat Training GuideInsider Tip CardAccess to Training ForumCitiNip - premium catnip'],
  ['cat bag', './images/catbag.jpg', '45','Transparent design, helpful for calming down pets anxiety, provide your pet a secure environment. Breathable and comfortable. Suitable for small or medium dogs and cats.Made of premium material, durable, breathable and comfortable.Transparent design, allow your pet to view sunshine and scenery from the outside world. Several ventilation holes on the side of the backpack, provide suffient air circulation, make your pet breathe comfortably'],
  ['Pet Massage gloves', './images/catshower.jpg', '30','FEMW Pet Grooming Glove - Efficient Pet Hair Remover Mitts - Pet Massage Gloves - Gentle Deshedding Brush Glove - for Dog Cat Horse with Long & Short Fur'],
  ['cat toys', './images/cattoys.jpg', '40','- These mice will be your cat’s favorite toys.Rattle -Plush Body,and they will make just the right amount of sound when they move.Perfectly sized to bat and carry.Brings out the natural hunting instincts of cats and kittens.'],
  ['Dog shower tools', './images/dogshowertools.jpg', '18','Aquapaw Pet Bathing Tool – Sprayer and Scrubber in One – Compatible with Indoor Shower or Outdoor Garden Hose – for Dog and Cat Grooming – Garden Hose and Shower Adapters Included'],
  ['Dog toys', './images/dogtoys.jpg', '27','KONG AirDog combines two classic dog toys -the tennis ball texture and the squeaker-to create the perfect fetch toy. Now available in dual materials for added strength, the non-abrasive, durable and high-quality material will not wear down dogs teeth.'],
  ['Dog travel bag', './images/dogtravelbag.jpg', '25','Pet Carrier Backpack Adjustable Pet Front Cat Dog Carrier Travel Bag Legs Out'],
  ['Rabbit & hamster travel bag','./images/Rabbit&hamsterTravelBag.jpg','30','Tbest Pet Carrier Bag Hamster Rat Cat Rabbit Pet Sling Carrier Backpack Hedgehog'],
  [' Shower tools', './images/Shower-Dog.jpg', '135','Aquapaw Pet Bathing Tool – Sprayer and Scrubber in One – Compatible with Indoor Shower or Outdoor Garden Hose – for Dog and Cat Grooming – Garden Hose and Shower Adapters Included'],
  ['pets staris toy', './images/petstairs.jpg', '19','KONG AirDog combines two classic dog toys -the tennis ball texture and the squeaker-to create the perfect fetch toy. Now available in dual materials for added strength, the non-abrasive, durable and high-quality material will not wear down dogs teeth.'],
  ['bag for small dog', './images/dogbag.jpg', '40','Pet Carrier Backpack Adjustable Pet Front Cat Dog Carrier Travel Bag Legs Out'],
  ['Dog toys', './images/s.jpg', '78','KONG AirDog combines two classic dog toys -the tennis ball texture and the squeaker-to create the perfect fetch toy. Now available in dual materials for added strength, the non-abrasive, durable and high-quality material will not wear down dogs teeth.'],
  ['bag for small dog', './images/dogbag.jpg', '40','Pet Carrier Backpack Adjustable Pet Front Cat Dog Carrier Travel Bag Legs Out'],
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




const Product = function (name, src, price, description) {
  this.id = getId();
  this.name = name;
  this.src = src;
  this.price = price;
  this.description= description;
  this.quantity = 0;
  Product.all.push(this);
};
Product.all = [];

function generate(array) {
  Product.all = [];
  section.innerHTML = '';
  for (let i = 0; i < array.length; i++) {


    new Product(array[i][0], array[i][1], array[i][2], array[i][3]);
  }
}

let section = document.getElementById('ProductsImages');




function render() {
  for (let i = 0; i < Product.all.length; i++) {



    let div = document.createElement('div');
    div.setAttribute('id', `no.{i}`);
    section.appendChild(div);
    section.className = 'card';

    let infoPage = document.createElement('a');
    infoPage.setAttribute('href', './productInfo.html');
    div.appendChild(infoPage);
    let img = document.createElement('img');
    img.src = Product.all[i].src;
    infoPage.appendChild(img);
    let h3 = document.createElement('h1');
    h3.textContent = Product.all[i].name;
    div.appendChild(h3);

    let p = document.createElement('p');
    div.appendChild(p);
    p.textContent = Product.all[i].description;


    let input = document.createElement('INPUT');
    input.setAttribute('type', 'number');
    input.setAttribute('placeholder', 'Quantity');
    input.setAttribute('min', 0);
    div.appendChild(input);
    let price = document.createElement('h3');
    div.appendChild(price);
    price.textContent = `price  {Product.all[i].price}  `;
    price.id='price';




    let btn = document.createElement('BUTTON');
    div.appendChild(btn);
    btn.innerHTML = 'Add to Cart';

    btn.setAttribute('id', Product.all[i].id);

  }

}



// document.addEventListener('click', function(e){
//   if(e.target.tagName=='BUTTON'){
//     //  alert('BUTTON CLICKED');
//   }
// });

  
  // document.addEventListener('click', function(e){
  //   if(e.target.tagName=="BUTTON"){
  //   //  alert('BUTTON CLICKED');
  //   }
  // })

// let btn = document.getElementById()

// btn.addEventListener('click', addItem);

// function addItem (){
//   console.log('111');
//   window.location='cart.html';
// }

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
let itemInfo=[];

section.addEventListener('click', addToCard);

function addToCard(event) {

  // add the the event for button only
  if (event.target.textContent == 'Add to Cart') {
    for (let i = 0; i <Product.all.length; i++) {
      // get obj using the ID
      if (Product.all[i].id == event.target.id) {
        cartArr.push([Product.all[i].name , Product.all[i].price]);
        localStorage.setItem('cartItem',JSON.stringify(cartArr));
        console.log(cartArr);
        //window.location.href='cart.html';
      }
    }
  }
  if(event.target.infoPage){
itemInfo
  }
}
console.log(cartArr);

function getData() {
  let data = JSON.parse(localStorage.getItem('cartItem'));
  if (data) {
   cartArr= data;

  }
}

getData();