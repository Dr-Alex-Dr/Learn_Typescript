import { Product } from "./Product";

export abstract class OrderItem {
    private _product: Product;
    private _quantity: number;

    constructor(product: Product, quantity: number) {
        this._product = product;
        this._quantity = quantity;
    }

    get product(): Product {
        return this._product;
    }

    set product(value: Product) {
        this._product = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    abstract getCost(): number;

    compare(other: OrderItem): number {
        if (this.getCost() < other.getCost()) {
            return 1;
        } else if (this.getCost() > other.getCost()) {
            return -1;
        } 
        return 0
    }

    log(): void {
        console.log(`Order: ${this._product.name}; Quantity: ${this._quantity}; Cost: ${this.getCost()}`);
    }
}