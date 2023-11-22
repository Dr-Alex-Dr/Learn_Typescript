import { OrderItem } from "./OrderItem";
import { Product } from "./Product";

export class DiscountOrderItem extends OrderItem {
    private _discount: number;

    constructor(product: Product, quantity: number, discount: number) {
        super(product, quantity);
        this._discount = discount;
    }

    getCost(): number {
        return (this.product.price - this._discount) * this.quantity;
    }
}