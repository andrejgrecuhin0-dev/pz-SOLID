import { Order, IPaymentStrategy, IOrderRepository, INotificationService } from "../interfaces";

export class OrderService {
    constructor(
        private repository: IOrderRepository,
        private paymentStrategy: IPaymentStrategy,
        private notifier: INotificationService
    ) {}

    public process(order: Order, amount: number): void {
        if (!order || order.items.length === 0) throw new Error("Order is empty");
        
        this.repository.save(order);
        if (this.paymentStrategy.pay(amount)) {
            this.notifier.send(`Order ${order.id} processed successfully.`);
        }
    }
}