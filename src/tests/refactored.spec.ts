import { describe, it, expect, jest } from '@jest/globals';
import { OrderService } from "../refactored/OrderService";
import { Order, IOrderRepository, IPaymentStrategy, INotificationService } from "../interfaces";

describe("OrderService SOLID Tests", () => {
    it("should process order successfully", () => {
        // Тепер TypeScript чітко бачить, що pay повертає true (boolean)
        const mockRepo: IOrderRepository = { save: jest.fn() };
        const mockPayment: IPaymentStrategy = { pay: jest.fn(() => true) };
        const mockNotifier: INotificationService = { send: jest.fn() };

        const service = new OrderService(mockRepo, mockPayment, mockNotifier);
        const testOrder: Order = { id: "1", items: ["Laptop"] };
        
        service.process(testOrder, 1000);

        expect(mockRepo.save).toHaveBeenCalledWith(testOrder);
        expect(mockPayment.pay).toHaveBeenCalledWith(1000);
        expect(mockNotifier.send).toHaveBeenCalledWith("Order 1 processed successfully.");
    });
});