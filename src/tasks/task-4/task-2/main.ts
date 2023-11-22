import { Product } from "./Product";
import { OrderItem } from "./OrderItem";
import { DiscountOrderItem } from "./DiscountOrderItem";
import { QuantityDiscountOrderItem } from "./QuantityDiscountOrderItem";
import { TransportationCostOrderItem } from "./TransportationCostOrderItem";


// Создание заказов 
const orders: OrderItem[] = [
    new DiscountOrderItem(new Product("Product1", 300), 2, 50),
    new DiscountOrderItem(new Product("Product3", 200), 3, 30),
    new QuantityDiscountOrderItem(new Product("Product2", 500), 20, 5.825, 15),
    new QuantityDiscountOrderItem(new Product("Product4", 400), 10, 10, 5),
    new TransportationCostOrderItem(new Product("Product5", 150), 5, 20),
    new TransportationCostOrderItem(new Product("Product6", 100), 8, 15)
];

console.log("Детали заказов до сортировки:");
orders.forEach(order => order.log());

orders.sort((a, b) => a.compare(b));

console.log("\nДетали заказов после сортировки");
orders.forEach(order => order.log());