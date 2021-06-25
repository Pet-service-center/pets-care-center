'use strict';

const Product = function(name, price ){
  this.name= name;
  this.price = price ;

};

let allProduct=[];

Product.prototype.addItem=function(name , price){
  let newProduct=new CartItem(name.price);
  allProduct.push(this);
};

const.prototype.savetolocastorage=function(){
    localStorage.setItem('Cart',JSON.stringify(allProduct));
}
