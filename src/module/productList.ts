
//Classes
export class productList {
    constructor (
      public  title : string,
      public  detail : string,
      public  type : string,
      public  locations : string,
      public  price : number,
     ) {}
  
     format() {
       return `${this.title}${this.detail}${this.type}${this.locations}${this.price}`;
     }
     
   }