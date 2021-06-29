'use strict';
//console.log(localStorage.getItem('cartItem'));
let cartItem = [];
function getData() {
  let data = localStorage.getItem('cartItem');
  if (data) {
  // for(i = 0 ; i< data.length; i++ )
   // {
      cartItem.push(JSON.parse(data));}
 // }
}
getData();
// let data =localStorage.getItem('cartItem');
// cartItem.push(JSON.parse(data));
//console.log(cartItem[0][1]);
//console.log(cartItem);
//console.log(cartItem[0]);

let tBody = document.getElementById('tBody');
let total = 0;
let div = document.getElementById('total');
function createCart() {
  if (cartItem.length > 0) {

    for (let i = 0; i < cartItem[0].length; i++) {

      let tr = document.createElement('tr');
      tBody.appendChild(tr);
      //tr.setAttribute('id', cartItem[0][i][0]);



      //td.textContent = cartItem[0][i][0];


      let td2 = document.createElement('td');
      tr.appendChild(td2);
      td2.textContent = cartItem[0][i][0];

      let td3 = document.createElement('td');
      tr.appendChild(td3);
      td3.textContent = cartItem[0][i][1];
      //td3.setAttribute('class', 'delete')
      total+=Number(cartItem[0][i][1]); 

    }

   // let div = document.getElementById('total');
  //  let h3 = document.createElement('h3');
  // div.appendChild(h3);
  //  h3.textContent = total;

   let tr2 = document.createElement('tr');
   tBody.appendChild(tr2);
   let td4 = document.createElement('td');
   tr2.appendChild(td4);
   td4.textContent ="The total";

   let td5 = document.createElement('td');
   tr2.appendChild(td5);
   td5.textContent = total;
  }

}
createCart();

function renderCart() {
  clearCart();
  createCart();
}


let removeItem = function (item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here
  //console.log("cart item" + cartItem)
  //console.log("item" + item)
  // cartItem[0].splice(item, 1);
};
//cartItem[0].splice(0, 1);


const table = document.getElementById('cart');
function clearCart() {
  while (table.rows.length > 0) {
    table.deleteRow(0)
  }
}

table.addEventListener('click', removeItemFromCart);

function removeItemFromCart(event) {
  let id;
  if (event.target.textContent === 'X') {
    console.log('inside remove');
    for (let i = 0; i < cartItem[0].length; i++) {
      if (event.target.parentElement.id == cartItem[0][i][0]) {
        console.log(cartItem[0][i][0]);
        id = i;
        console.log('inside if ', id);
        console.log(cartItem[0][id])
        // cartItem[0].splice(id, 1);
       
        // localStorage.setItem('cartItem', JSON.stringify(cart.items));


        // clearCart();
        // renderCart();
      }

    }
    cartItem[0].splice(id, 1);
       
        localStorage.setItem('cartItem', JSON.stringify(cartItem));
        renderCart();

  }
}

// document.addEventListener('DOMContentLoad',pageload);
// function pageload(){
//   renderCart;
// }
console.log(JSON.stringify(cartItem));

