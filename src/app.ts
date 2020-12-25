
// let gets: (a: string, b: number) => void;

// gets = (name : string, Uid : number) => {
//   console.log(name, Uid);
// }
// gets("sajid", 123)
import { productList } from './module/productList.js'

let pro1 = new productList ('Laptop', 'core i5', 'Used', 'Karachi', 25000);
let pro2 = new productList ('Dell Desktop', 'core i5 dell', 'New', 'Lahore', 65000);

let productListArray: productList[] = []

productListArray.push(pro1);
productListArray.push(pro2);

productListArray.forEach(pro => {
  console.log(pro.title, pro.detail, pro.type, pro.locations, pro.price);
});

let form = document.querySelector(".new-item-form") as HTMLFormElement;
//console.log(form.children);

let proTitle = document.querySelector("#proTitle") as HTMLInputElement;
let details = document.querySelector("#details") as HTMLTextAreaElement;
let type    = document.querySelector("#type") as HTMLSelectElement;
let locations    = document.querySelector("#location") as HTMLSelectElement;
let price    = document.querySelector("#price") as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  return console.log(
    proTitle.value,
    details.value,
    type.value,
    locations.value,
    price.value,
  )
})