import { OrderItem } from "./OrderItem";
import { Product } from "./Product";

export class TransportationCostOrderItem extends OrderItem {
    private _transportationCostPerUnit: number;

    constructor(product: Product, quantity: number, transportationCostPerUnit: number) {
        super(product, quantity);
        this._transportationCostPerUnit = transportationCostPerUnit;
    }

    getCost(): number {
        return this.product.price * this.quantity + this._transportationCostPerUnit * this.quantity;
    }
}
