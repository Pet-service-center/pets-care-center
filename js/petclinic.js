/* eslint-disable no-unused-vars */
'use strict';


//////////********** the constructor function  ********///////////

function AppointmentForm(name, email, phone, pet, appointmentDate, favTime, reviewText) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.pet = pet;
  this.appointmentDate = appointmentDate;
  this.favTime = favTime;
  this.reviewText = reviewText;
  AppointmentForm.all.push(this);
  console.log(AppointmentForm.all);
  // this.render();
  // if (AppointmentForm.all.length > 0) {
  let userInfo = JSON.stringify(AppointmentForm.all);
  localStorage.setItem('userInfo', userInfo);
  console.log(userInfo);
  // }
}
AppointmentForm.all = [];
console.log(AppointmentForm.all);

//////////********** the render prototype ********///////////

AppointmentForm.prototype.render = function() {
  let table = document.getElementById('informationSavedTable');
  let theBodyPart = document.createElement('tbody');
  table.appendChild(theBodyPart);

  let bodyRow = document.createElement('tr');
  theBodyPart.appendChild(bodyRow);


  let firstElement = document.createElement('td');
  bodyRow.appendChild(firstElement);
  firstElement.textContent = `${this.name}`;

  let secondElement = document.createElement('td');
  bodyRow.appendChild(secondElement);
  secondElement.textContent = `${this.email}`;
  let thirdElement = document.createElement('td');
  bodyRow.appendChild(thirdElement);
  thirdElement.textContent = `${this.phone}`;

  let fourthElement = document.createElement('td');
  bodyRow.appendChild(fourthElement);
  fourthElement.textContent = `${this.pet}`;

  let fifthElement = document.createElement('td');
  bodyRow.appendChild(fifthElement);
  fifthElement.textContent = `${this.appointmentDate}`;

  let sixthElement = document.createElement('td');
  bodyRow.appendChild(sixthElement);
  sixthElement.textContent = `${this.favTime }`;

  let seventhElement = document.createElement('td');
  bodyRow.appendChild(seventhElement);
  seventhElement.textContent = `${this.reviewText}`;
  let submition = document.getElementById('oppontment');
  submition.innerHTML = (`${Date()},your form is submited , we will call you soon ${this.name}`);
};

//////////********** the form submission event handler ********///////////

function formSubmission(event) {
  event.preventDefault();
  let name = event.target.fname.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;
  let pet = event.target.pet.value;
  let appointmentDate = event.target.appointment.value;
  let favTime = event.target.time.value;
  let reviewText = event.target.review.value;

  let newForm = new AppointmentForm(name, email, phone, pet, appointmentDate, favTime, reviewText);
  // AppointmentForm.all.push(newForm);
  newForm.render();
  document.getElementById('appointform').reset();
}
let newForm = document.getElementById('appointform');
newForm.addEventListener('submit', formSubmission);

//////////********** the onLoad function  ********///////////

document.addEventListener('DOMContentLoad', pageload());

function pageload() {
  console.log(localStorage);
  if (localStorage !== []) {
    let previousData = JSON.parse(localStorage.getItem('userInfo'));

    if (previousData) {
      for (let i = 0; i < previousData.length; i++) {
        let newForm = new AppointmentForm(previousData[i].name, previousData[i].email, previousData[i].phone, previousData[i].pet, previousData[i].appointmentDate, previousData[i].favTime, previousData[i].reviewText);
        newForm.render();
        console.log(previousData[i]);
      }
      console.log('pre' + AppointmentForm.all);


      let informationSaved = document.getElementById('oppontment');
      informationSaved.innerHTML = '';
    }
  }
}

//////////**********localstorage clear function  ********///////////

function myfunction() {
  localStorage.clear();
  window.location.reload();
}