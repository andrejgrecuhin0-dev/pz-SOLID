export interface Order { id: string; items: string[]; }
export interface IPaymentStrategy { pay(amount: number): boolean; }
export interface IOrderRepository { save(order: Order): void; }
export interface INotificationService { send(message: string): void; }