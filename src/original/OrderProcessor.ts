// Порушення всіх принципів SOLID

export class OrderProcessor {
    // 1. Порушення SRP: Клас робить усе (валідація, база, оплата, пошта)
    // 2. Порушення OCP: Щоб додати ApplePay, доведеться змінювати цей if-else
    // 3. Порушення DIP: Ми жорстко створюємо new MySQLDatabase() замість інтерфейсу
    public processOrder(order: any, paymentType: string) {
        if (!order || order.items.length === 0) {
            throw new Error("Order is empty");
        }

        const db = new MySQLDatabase();
        db.save(order);

        if (paymentType === "creditCard") {
            console.log("Processing credit card payment...");
        } else if (paymentType === "paypal") {
            console.log("Processing paypal payment...");
        } else {
            throw new Error("Payment method not supported");
        }

        console.log("Sending order confirmation email...");
    }
}

class MySQLDatabase {
    save(order: any) { console.log("Saved to MySQL Database"); }
}

// 4. Порушення ISP: Роботи не їдять, але цей інтерфейс змусить їх реалізувати eat()
export interface IWorker {
    work(): void;
    eat(): void; 
}

// 5. Порушення LSP: Пінгвін наслідує Птаха, але метод fly() ламає програму
export class Bird {
    fly() { console.log("Flying"); }
}
export class Penguin extends Bird {
    fly() { throw new Error("Penguins can't fly!"); }
}