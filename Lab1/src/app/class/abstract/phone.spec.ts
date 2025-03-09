import { Phone } from './phone';
import { ElectronicDevice } from './electronic-device';

describe('Phone Testing', () => {
  let phone: Phone;

  beforeEach(() => {
    phone = new Phone("Samsung", 500, 20, 10);
  });

  it("Створення екземпляра класу Phone", () => {
    expect(phone).toBeTruthy();
  });

  it("Phone є екземпляром ElectronicDevice", () => {
    expect(phone).toBeInstanceOf(ElectronicDevice);
  });

  it("Метод displayInfo() повертає правильний рядок", () => {
    const info = phone.displayInfo();
    expect(info).toContain("Час роботи: 10 год");
  });

  it("Виклик makeCall() не викликає помилок", () => {
    expect(() => phone.makeCall()).not.toThrow();
  });
});
