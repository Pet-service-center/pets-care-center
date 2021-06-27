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
function Animals(type, description, age, city, phone, img) {

  this.id = 0;
  this.type = type;
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
  new Animals('parrot', descr, 6, 'Amman', '0784521365', './img/bird1.jpg');
  descr = 'This little one loves food so much..feed it or it will hit you with his beak';
  new Animals('parrot', descr, 7, 'Irbed', '0796586633', './img/bird2.jpg');
  descr = 'Quiet and beautiful voice but my mom doesn\'t want him anymore';
  new Animals('parrot', descr, 8, 'Amman', '0778965412', './img/bird3.jpg');
  descr = 'I love my bird very much, please take care of it';
  new Animals('parrot', descr, 4, 'Aqapa', '0775684585', './img/bird4.jpg');
  descr = 'sometext';
  new Animals('cat', descr, 2, 'Amman', '078542132', './img/cat1.webp');
  descr = 'sometext';
  new Animals('cat', descr, 3, 'Mafraq', '077452132', './img/cat2.jpg');
  descr = 'sometext';
  new Animals('cat', descr, 5, 'Salt', '0796532325', './img/cat3.jpg');
  descr = 'sometext';
  new Animals('cat', descr, 6, 'Sahab', '0789656532', './img/cat4.jpg');
  descr = 'sometext';
  new Animals('cat', descr, 3, 'Mafraq', '077452132', './img/cat5.jpg');
  descr = 'sometext';
  new Animals('cat', descr, 4, 'Madabaa', '0790014563', './img/cat6.jpg');
  descr = 'sometext';
  new Animals('cat', descr, 2, 'Amman', '0784545656', './img/cat7.jpg');
  descr = 'sometext';
  new Animals('dog', descr, 6, 'Mafraq', '0778998874', './img/dog1.jpg');
  descr = 'sometext';
  new Animals('dog', descr, 5, 'Amman', '0772323456', './img/dog2.jpg');
  descr = 'sometext';
  new Animals('dog', descr, 12, 'Salt', '0785236974', './img/dog3.jpg');
  descr = 'sometext';
  new Animals('dog', descr, 10, 'Ajlon', '0790114511', './img/dog4.jpg');
  descr = 'sometext';
  new Animals('fish', descr, 2, 'Irbed', '0778956224', './img/fish1.jpg');
  descr = 'sometext';
  new Animals('fish', descr, 1, 'Aqaba', '0793200155', './img/fish2.png');
  descr = 'sometext';
  new Animals('hamster', descr, 3, 'Amman', '077224466', './img/hamstor1.jpg');
  descr = 'sometext';
  new Animals('hamster', descr, 2, 'Amman', '0780159877', './img/hamstor2.jpg');
  descr = 'sometext';
  new Animals('turtle', descr, 1, 'Irbid', '0785646589', './img/turtle1.jpg');
  descr = 'sometext';
  new Animals('turtle', descr, 3, 'Salt', '0796655447', './img/turtle2.jpg');

}

addMainObj();


// Recall the function to re-store the object according to the store in local storage
getData();


// create card for each object type
function render(divSet, typeSet) {
  for (let i = 0; i < Animals.all.length; i++) {
    if (Animals.all[i].type === typeSet) {
      let div = document.createElement('div');
      divSet.appendChild(div);
      let img = document.createElement('img');
      img.src = Animals.all[i].img;
      div.appendChild(img);
      let h1 = document.createElement('h1');
      h1.textContent = Animals.all[i].type;
      div.appendChild(h1);
      let p1 = document.createElement('p');
      p1.textContent = `${Animals.all[i].age} week`;
      div.appendChild(p1);
      let p2 = document.createElement('p');
      p2.textContent = Animals.all[i].city;
      div.appendChild(p2);
      let p3 = document.createElement('p');
      p3.textContent = Animals.all[i].phone;
      div.appendChild(p3);
      let h5 = document.createElement('h5');
      h5.textContent = Animals.all[i].description;
      div.appendChild(h5);
      let p4 = document.createElement('p');
      div.appendChild(p4);
      let button = document.createElement('button');
      button.textContent = 'Adoption';
      p4.appendChild(button);
      button.setAttribute('id', Animals.all[i].id);

    }

  }
}


//
function renderAll() {

  render(hamstor, 'hamster');
  render(cat, 'cat');
  render(dog, 'dog');
  render(fish, 'fish');
  render(bird, 'parrot');
  render(turtle, 'turtle');

}
renderAll();

// to remove the elemntes from html page
function cleadDiv() {

  hamstor.innerHTML='';
  cat.innerHTML='';
  dog.innerHTML='';
  fish.innerHTML='';
  bird.innerHTML='';
  turtle.innerHTML='';

}


// add event
mainDiv.addEventListener('click', removeAnimals);

function removeAnimals(event) {

  // add the the event for button only
  if (event.target.textContent === 'Adoption') {
    for (let i = 0; i < Animals.all.length; i++) {
      // get obj using the ID
      if (Animals.all[i].id == event.target.id) {
        Animals.all.splice(i, 1);
        // re store in local
        setData();
        // clear html page
        cleadDiv();
        // re-drow the html page with new edit in local
        renderAll();


      }

    }

  }
}






// form
function openForm() {
  document.getElementById('myForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
}

let form = document.getElementById('formPits');


function formSubmission(event) {
  event.preventDefault();
  let type = event.target.type.value.toLowerCase();
  let age = event.target.age.value;
  let img = event.target.img.value;
  let des = event.target.des.value;
  let city = event.target.city.value;
  let phone = event.target.phone.value;

  new Animals(type, des, age, city, phone,img);
  // re store in local
  setData();
  // clear html page
  cleadDiv();
  // re-drow the html page with new edit in local
  renderAll();
  window.location.href = `#${type}Div`;
  console.log(`#${type}`);
  document.getElementById('myForm').style.display = 'none';



}

form.addEventListener('submit', formSubmission);

