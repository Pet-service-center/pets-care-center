
'use strict';


console.log(localStorage.getItem('cartItem'));
let cartItem = [];

let data =localStorage.getItem=localStorage.getItem('cartItem');
cartItem.push(JSON.parse(data));
//console.log(cartItem[0][1]);
//console.log(cartItem);
console.log(cartItem[0])
let tBody =document.getElementById('tBody');
function createCart(){
  for(let i=0; i < cartItem.length;i++){
    for(let j=0 ; j<cartItem[i].length ; j++)
    {let tr=document.createElement('tr');
    tBody.appendChild(tr);
    let td=document.createElement('td');
    tr.appendChild(td);
    td.textContent=cartItem[i][j][0];
    let td2=document.createElement('td');
    tr.appendChild(td2);
    td2.textContent=cartItem[i][j][1];
    let td3=document.createElement('td');
    tr.appendChild(td3);
    td3.textContent='X';}
  }
}
createCart();


