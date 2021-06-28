
'use strict';

console.log(localStorage.getItem('cartItem'));
let cartItem = [];
localStorage.getItem=localStorage.getItem('cartItem');
console.log(cartItem[0][1]);
console.log(cartItem);
let tBody =document.getElementById('tBody');
function createCart(){
  for(let i=0; i < cartItem.length;i++){
    let tr=document.createElement('tr');
    tBody.appendChild(tr);
    let td=document.createElement('td');
    tr.appendChild(td);
    td.textContent=cartItem[i][0];
    let td2=document.createElement('td');
    tr.appendChild(td2);
    td2.textContent=cartItem[i][1];
    let td3=document.createElement('td');
    tr.appendChild(td3);
    td3.textContent='X';
  }
}
createCart();
