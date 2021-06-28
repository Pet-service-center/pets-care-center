let id = JSON.parse(localStorage.getItem('adopt'));
console.log(id);

let petsDiv = document.getElementById('pets');
let index;

function render() {
  for (let i = 0; i < Animals.all.length; i++) {
    if (Animals.all[i].id === id) {
      //console.log('found')
      let div = document.createElement('div');
      //divSet.appendChild(div);
      petsDiv.appendChild(div);
      let img = document.createElement('img');
      img.src = Animals.all[i].img;
      div.appendChild(img);
      let h1 = document.createElement('h1');
      h1.textContent = Animals.all[i].name;
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



      index = i;

    }

  }
}

render();


function User(userName, email, phone, pet) {
  this.userName = userName;
  this.email = email;
  this.phone = phone;
  this.pet = pet;
  User.all.push(this);
}
User.all = [];

let form = document.getElementById('userInfo');

form.addEventListener('submit', adduser);

function adduser(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let email = e.target.email.value;
  let phone = e.target.phone.value;
  new User(name, email, phone, [Animals.all[index].name, Animals.all[index].city, Animals.all[index].phone, Animals.all[index].img]);
  //console.log(User.all)
  localStorage.setItem('user', JSON.stringify(User.all));

  Animals.all.splice(index, 1);
  setData();
  form.reset();
  window.location.href = 'adopt.html';
}
// console.log(User.all)
// console.log(Animals.all[index])
let get;

function getUserData() {
  let data = JSON.parse(localStorage.getItem('user'));
  if (data) {
    get = new User(data);

  }
}
getData();

function cancel() {
  window.location.href = 'adopt.html';
}