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
  descr = 'My beautiful cat loves to sleep, don\'t disturb her and secure her a warm bed';
  new Animals('cat','Mesho', descr, 2, 'Amman', '078542132', './img/cat1.webp');
  descr = 'Always play with it and give it some time to get used to you';
  new Animals('cat','Lala', descr, 3, 'Mafraq', '077452132', './img/cat2.jpg');
  descr = 'This cat has been my friend since childhood, but I will be traveling soon. It can\'t go with me. take care of it';
  new Animals('cat','Frank', descr, 5, 'Salt', '0796532325', './img/cat3.jpg');
  descr = 'Keep it close, my cat is afraid of strangers';
  new Animals('cat','Sam', descr, 6, 'Sahab', '0789656532', './img/cat4.jpg');
  descr = 'Unfortunately I have so much work that I can\'t keep it';
  new Animals('cat','Gully', descr, 3, 'Mafraq', '077452132', './img/cat5.jpg');
  descr = 'You love to play and have fun, give it a lot of food';
  new Animals('cat','Natasha', descr, 4, 'Madabaa', '0790014563', './img/cat6.jpg');
  descr = ' My cat is afraid of strangers, but it so cute';
  new Animals('cat','Ran', descr, 2, 'Amman', '0784545656', './img/cat7.jpg');
  descr = 'I love my dog very much, please take care of it';
  new Animals('dog','Boll', descr, 6, 'Mafraq', '0778998874', './img/dog1.jpg');
  descr = 'Always play with it and give it some time to get used to you';
  new Animals('dog','Jimy', descr, 5, 'Amman', '0772323456', './img/dog2.jpg');
  descr = 'You love to play and have fun, give it a lot of food';
  new Animals('dog','Bella', descr, 12, 'Salt', '0785236974', './img/dog3.jpg');
  descr = 'I have a lot of studying so I can\'t take good care of it, It deserves all the love';
  new Animals('dog','Boby', descr, 10, 'Ajlon', '0790114511', './img/dog4.jpg');
  descr = 'I love my fish very much, please take care of it';
  new Animals('fish','kevin', descr, 2, 'Irbed', '0778956224', './img/fish1.jpg');
  descr = 'Unfortunately I have so much work that I can\'t keep it';
  new Animals('fish','Millo', descr, 1, 'Aqaba', '0793200155', './img/fish2.png');
  descr = 'You love to play and have fun, give it a lot of food';
  new Animals('hamster','Olivar', descr, 3, 'Amman', '077224466', './img/hamstor1.jpg');
  descr = 'I have a lot of studying so I can\'t take good care of it, It deserves all the love';
  new Animals('hamster','Leo', descr, 2, 'Amman', '0780159877', './img/hamstor2.jpg');
  descr = 'I love my turtle very much, please take care of it';
  new Animals('turtle','Toby', descr, 1, 'Irbid', '0785646589', './img/turtle1.jpg');
  descr = 'Unfortunately I have so much work that I can\'t keep it';
  new Animals('turtle','Scout', descr, 3, 'Salt', '0796655447', './img/turtle2.jpg');

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
      h1.textContent = Animals.all[i].name;
      h1.className = "petName";
      div.appendChild(h1);

      let h2 = document.createElement('h1');
      h2.textContent = `Age: ${Animals.all[i].age} week`;
      div.appendChild(h2);
      h2.className = 'petWeek';

      let p2 = document.createElement('p');
      p2.textContent = `City: ${Animals.all[i].city}`;
      div.appendChild(p2);
      p2.className='pitCity';

      let p3 = document.createElement('p');
      p3.textContent = `Phone: ${Animals.all[i].phone}`;
      div.appendChild(p3);
      p3.className = 'petPhone';

      let h5 = document.createElement('h5');
      h5.textContent = Animals.all[i].description;
      div.appendChild(h5);
      h5.className='petDesc';

      let p4 = document.createElement('p');
      div.appendChild(p4);
      let button = document.createElement('button');
      button.textContent = 'Adopt';
      p4.appendChild(button);
      button.setAttribute('id', Animals.all[i].id);

    }

  }
}



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
let surediv=document.getElementById('sure');


function removeAnimals(event) {

  // add the the event for button only
  if (event.target.textContent === 'Adopt') {
    for (let i = 0; i < Animals.all.length; i++) {
      // get obj using the ID
      if (Animals.all[i].id == event.target.id) {
        // surediv.style.display='block';
        localStorage.setItem('adopt',Animals.all[i].id);
        window.location.href='adoptUser.html';
        // Animals.all.splice(i, 1);
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


function catlist(){
  cleadDiv();
  render(cat, 'cat');
}


function doglist(){
  cleadDiv();
  render(dog, 'dog');
}

function fishlist(){
  cleadDiv();
  render(fish,'fish');
}
function turtlelist(){
  cleadDiv();
  render(turtle, 'turtle');
}

function parrotlist(){
  cleadDiv();
  render(bird, 'parrot');
}

function hamsterlist(){
  cleadDiv();
  render(hamstor, 'hamster');
}



// form
function openForm() {
  document.getElementById('myForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
}

let form = document.getElementById('formPits');

form.addEventListener('submit', formSubmission);

function formSubmission(event) {
  event.preventDefault();
  let type = event.target.type.value.toLowerCase();
  let name= event.target.name.value;
  let age = event.target.age.value;
  let img = event.target.img.value;
  let des = event.target.des.value;
  let city = event.target.city.value;
  let phone = event.target.phone.value;

  new Animals(type,name, des, age, city, phone,img);
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
