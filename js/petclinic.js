/* eslint-disable no-unused-vars */
'use strict';

/////////////********function to handle the submit of the form*******/////////////
function appointmentFormSubmission(event) {
  event.preventDefault();
  let firstName = document.getElementById('fname').value;
  let lastName = document.getElementById('lname').value;
  document.getElementById('appointmentForm').innerHTML = (`${Date()},
  your form is submited , we will call you soon ${firstName} ${lastName} `);
}


let appointform = document.getElementById('appointform');
appointform.addEventListener('submit', appointmentFormSubmission);

////////**********function to reset the form and the div after it********///////////
function resetForm() {
  document.getElementById('appointmentForm').innerHTML = '';
  document.getElementById('appointform').reset();
}