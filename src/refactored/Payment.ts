import { IPaymentStrategy } from "../interfaces";

export class CreditCardPayment implements IPaymentStrategy {
    pay(amount: number): boolean { return true; }
}

export class PayPalPayment implements IPaymentStrategy {
    pay(amount: number): boolean { return true; }
}