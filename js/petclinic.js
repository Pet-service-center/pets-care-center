/* eslint-disable no-unused-vars */
'use strict';
let oppontment=document.getElementById('oppontment');

/////////////********function to handle the submit of the form*******/////////////
function appointmentFormSubmission(event) {
  event.preventDefault();
  let FullName = document.getElementById('fname').value;
  let submition=document.createElement('p');
  oppontment.appendChild(submition);
  submition.innerHTML = (`${Date()},your form is submited , we will call you soon ${FullName}`);
  document.getElementById('appointform').reset();
}

let appointform = document.getElementById('appointform');
appointform.addEventListener('submit', appointmentFormSubmission);

////////**********function to reset the form and the div after it********///////////
