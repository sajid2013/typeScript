//Classes
export class productList {
    constructor(title, detail, type, locations, price) {
        this.title = title;
        this.detail = detail;
        this.type = type;
        this.locations = locations;
        this.price = price;
    }
    format() {
        return `${this.title}${this.detail}${this.type}${this.locations}${this.price}`;
    }
}
