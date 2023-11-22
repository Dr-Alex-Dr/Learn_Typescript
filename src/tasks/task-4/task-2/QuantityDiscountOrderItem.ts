import { DiscountOrderItem } from "./DiscountOrderItem";
import { Product } from "./Product";

export class QuantityDiscountOrderItem extends DiscountOrderItem {
    private _requiredQuantity: number;

    constructor(product: Product, quantity: number, discount: number, requiredQuantity: number) {
        super(product, quantity, discount);
        this._requiredQuantity = requiredQuantity;
    }

    getCost(): number {
        if (this.quantity >= this._requiredQuantity) {
            return super.getCost();
        } 
        return this.product.price * this.quantity;
    }
}