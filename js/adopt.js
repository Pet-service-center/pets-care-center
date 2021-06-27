'use strict';

let mainDiv = document.getElementById('mainDiv');
let cat = document.getElementById('catDiv');
let dog = document.getElementById('dogDiv');
let bird = document.getElementById('birdDiv');
let fish = document.getElementById('fishDiv');
let hamstor= document.getElementById('hamsterDiv');
let turtle = document.getElementById('turtleDiv');

// return random number
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// git Unique id for each object
function getId() {
  let id;
  for (let i = 0; i < Animals.all.length; i++) {
    do {
      id = getRandomInteger(0, 1000);

    } while (id === Animals.all[i].id);
  }
  return id;
}

// set data in local storage
function setData() {
  localStorage.setItem('animal', JSON.stringify(Animals.all));
}

// get data from local storage
function getData() {
  let data = JSON.parse(localStorage.getItem('animal'));
  if (data) {
    Animals.all = data;

  }
}


getData();

// object
function Animals(type, name,description, age, city, phone, img) {

  this.id = 0;
  this.type = type;
  this.name=name;
  this.description = description;
  this.age = age;
  this.city = city;
  this.phone = phone;
  this.img = img;
  Animals.all.push(this);
  this.id = getId();


}

let descr = '';
Animals.all = [];

// creat base object
function addMainObj() {

  descr = 'This is my beautiful parrot, unfortunately I have a lot of work and do not have time to play with him.. I hope he is happy with the one who will take care of him after me';
  new Animals('parrot','Bebo', descr, 6, 'Amman', '0784521365', './img/bird1.jpg');
  descr = 'This little one loves food so much..feed it or it will hit you with his beak';
  new Animals('parrot','Koki', descr, 7, 'Irbed', '0796586633', './img/bird2.jpg');
  descr = 'Quiet and beautiful voice but my mom doesn\'t want him anymore';
  new Animals('parrot','Sam', descr, 8, 'Amman', '0778965412', './img/bird3.jpg');
  descr = 'I love my bird very much, please take care of it';
  new Animals('parrot','Sozy', descr, 4, 'Aqapa', '0775684585', './img/bird4.jpg');
  descr = 'sometext';
  new Animals('cat','Mesho', descr, 2, 'Amman', '078542132', './img/cat1.webp');
  descr = 'sometext';
  new Animals('cat','Lala', descr, 3, 'Mafraq', '077452132', './img/cat2.jpg');
  descr = 'sometext';
  new Animals('cat','Frank', descr, 5, 'Salt', '0796532325', './img/cat3.jpg');
  descr = 'sometext';
  new Animals('cat','Sam', descr, 6, 'Sahab', '0789656532', './img/cat4.jpg');
  descr = 'sometext';
  new Animals('cat','Gully', descr, 3, 'Mafraq', '077452132', './img/cat5.jpg');
  descr = 'sometext';
  new Animals('cat','Natasha', descr, 4, 'Madabaa', '0790014563', './img/cat6.jpg');
  descr = 'sometext';
  new Animals('cat','Ran', descr, 2, 'Amman', '0784545656', './img/cat7.jpg');
  descr = 'sometext';
  new Animals('dog','Boll', descr, 6, 'Mafraq', '0778998874', './img/dog1.jpg');
  descr = 'sometext';
  new Animals('dog','Jimy', descr, 5, 'Amman', '0772323456', './img/dog2.jpg');
  descr = 'sometext';
  new Animals('dog','Bella', descr, 12, 'Salt', '0785236974', './img/dog3.jpg');
  descr = 'sometext';
  new Animals('dog','Boby', descr, 10, 'Ajlon', '0790114511', './img/dog4.jpg');
  descr = 'sometext';
  new Animals('fish','kevin', descr, 2, 'Irbed', '0778956224', './img/fish1.jpg');
  descr = 'sometext';
  new Animals('fish','Millo', descr, 1, 'Aqaba', '0793200155', './img/fish2.png');
  descr = 'sometext';
  new Animals('hamster','Olivar', descr, 3, 'Amman', '077224466', './img/hamstor1.jpg');
  descr = 'sometext';
  new Animals('hamster','Leo', descr, 2, 'Amman', '0780159877', './img/hamstor2.jpg');
  descr = 'sometext';
  new Animals('turtle','Toby', descr, 1, 'Irbid', '0785646589', './img/turtle1.jpg');
  descr = 'sometext';
  new Animals('turtle','Scout', descr, 3, 'Salt', '0796655447', './img/turtle2.jpg');

}

addMainObj();


// Recall the function to re-store the object according to the store in local storage
getData();



