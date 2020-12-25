// let gets: (a: string, b: number) => void;
// gets = (name : string, Uid : number) => {
//   console.log(name, Uid);
// }
// gets("sajid", 123)
import { productList } from './module/productList.js';
let pro1 = new productList('Laptop', 'core i5', 'Used', 'Karachi', 25000);
let pro2 = new productList('Dell Desktop', 'core i5 dell', 'New', 'Lahore', 65000);
let productListArray = [];
productListArray.push(pro1);
productListArray.push(pro2);
productListArray.forEach(pro => {
    console.log(pro.title, pro.detail, pro.type, pro.locations, pro.price);
});
let form = document.querySelector(".new-item-form");
//console.log(form.children);
let proTitle = document.querySelector("#proTitle");
let details = document.querySelector("#details");
let type = document.querySelector("#type");
let locations = document.querySelector("#location");
let price = document.querySelector("#price");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    return console.log(proTitle.value, details.value, type.value, locations.value, price.value);
});
