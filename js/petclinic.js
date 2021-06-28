/* eslint-disable no-unused-vars */
'use strict';
let oppontment = document.getElementById('oppontment');

/////////////********function to handle the submit of the form*******/////////////
function appointmentFormSubmission(event) {
  event.preventDefault();
  let FullName = document.getElementById('fname').value;
  let submition = document.getElementById('oppontment');
  submition.innerHTML = (`${Date()},your form is submited , we will call you soon ${FullName}`);

  localStorage.setItem('name', event.target.fname.value);
  localStorage.setItem('email', event.target.email.value);
  localStorage.setItem('phone', event.target.phone.value);
  localStorage.setItem('pet', event.target.pet.value);
  localStorage.setItem('Appointment', event.target.Appointment.value);
  localStorage.setItem('time', event.target.time.value);
  localStorage.setItem('review', event.target.review.value);
  let informationSaved = document.getElementById('informationSaved');
  let fullNameField = localStorage.getItem('name');
  let emailField = localStorage.getItem('email');
  let phoneNumberField = localStorage.getItem('phone');

  let pickTypeField = localStorage.getItem('pet');
  console.log(pickTypeField);
  let AppointmentDateField = localStorage.getItem('Appointment');

  let timeFavField = localStorage.getItem('time');
  let reviewTextField = localStorage.getItem('review');


  // informationSaved.innerHTML = (`The full name is :${fullNameField} , Email: ${emailField} and The phone number is: ${phoneNumberField}<br>It Pet :  ${pickTypeField} and want the appointment date at ${AppointmentDateField} during  ${ timeFavField } from the day.<br> Reason for Appointment & Additional Comments: ${reviewTextField}`);
  let table = document.getElementById('informationSavedTable');
  let theBodyPart = document.createElement('tbody');
  table.appendChild(theBodyPart);

  let bodyRow = document.createElement('tr');
  theBodyPart.appendChild(bodyRow);


  let firstElement = document.createElement('td');
  bodyRow.appendChild(firstElement);
  firstElement.textContent = `${fullNameField}`;

  let secondElement = document.createElement('td');
  bodyRow.appendChild(secondElement);
  secondElement.textContent = `${emailField}`;
  let thirdElement = document.createElement('td');
  bodyRow.appendChild(thirdElement);
  thirdElement.textContent = `${phoneNumberField}`;

  let fourthElement = document.createElement('td');
  bodyRow.appendChild(fourthElement);
  fourthElement.textContent = `${pickTypeField}`;

  let fifthElement = document.createElement('td');
  bodyRow.appendChild(fifthElement);
  fifthElement.textContent = `${AppointmentDateField}`;

  let sixthElement = document.createElement('td');
  bodyRow.appendChild(sixthElement);
  sixthElement.textContent = `${pickTypeField}`;

  let seventhElement = document.createElement('td');
  bodyRow.appendChild(seventhElement);
  seventhElement.textContent = `${reviewTextField}`;

  document.getElementById('appointform').reset();
}

let appointform = document.getElementById('appointform');
appointform.addEventListener('submit', appointmentFormSubmission);

////////********** show the data in the local storage ********///////////

document.addEventListener('DOMContentLoad', pageload());

function pageload() {
  console.log(localStorage);
  if (localStorage.length !== 0) {
    let informationSaved = document.getElementById('informationSaved');
    let fullNameField = localStorage.getItem('name');
    let emailField = localStorage.getItem('email');
    let phoneNumberField = localStorage.getItem('phone');

    let pickTypeField = localStorage.getItem('pet');
    let AppointmentDateField = localStorage.getItem('Appointment');

    let timeFavField = localStorage.getItem('time');
    let reviewTextField = localStorage.getItem('review');
    // informationSaved.innerHTML = (`The full name is :${fullNameField} , Email: ${emailField} and The phone number is: ${phoneNumberField}<br>It Pet :  ${pickTypeField} and want the appointment date at ${AppointmentDateField} during  ${ timeFavField } from the day.<br> Reason for Appointment & Additional Comments: ${reviewTextField}`);
    let table = document.getElementById('informationSavedTable');
    let theBodyPart = document.createElement('tbody');
    table.appendChild(theBodyPart);

    let bodyRow = document.createElement('tr');
    theBodyPart.appendChild(bodyRow);


    let firstElement = document.createElement('td');
    bodyRow.appendChild(firstElement);
    firstElement.textContent = `${fullNameField}`;

    let secondElement = document.createElement('td');
    bodyRow.appendChild(secondElement);
    secondElement.textContent = `${emailField}`;
    let thirdElement = document.createElement('td');
    bodyRow.appendChild(thirdElement);
    thirdElement.textContent = `${phoneNumberField}`;

    let fourthElement = document.createElement('td');
    bodyRow.appendChild(fourthElement);
    fourthElement.textContent = `${pickTypeField}`;

    let fifthElement = document.createElement('td');
    bodyRow.appendChild(fifthElement);
    fifthElement.textContent = `${AppointmentDateField}`;

    let sixthElement = document.createElement('td');
    bodyRow.appendChild(sixthElement);
    sixthElement.textContent = `${ timeFavField }`;

    let seventhElement = document.createElement('td');
    bodyRow.appendChild(seventhElement);
    seventhElement.textContent = `${reviewTextField}`;
  } else {
    let informationSaved = document.getElementById('informationSaved');
    informationSaved.innerHTML = '';
  }
}


/////////////************ onther way to do this *///////////////////
function appointmentForm(name, email, phone, pet, appontmentDate, )