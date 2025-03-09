import { ElectronicDevice } from './electronic-device';

describe('ElectronicDevice Testing', () => {
  let device: ElectronicDevice;

  beforeEach(() => {
    device = new ElectronicDevice("Samsung", 1000, 150);
  });

  it("Створення екземпляра класу ElectronicDevice", () => {
    expect(device).toBeTruthy();
  });

  it("Метод getBrand() повертає правильний бренд", () => {
    expect(device.getBrand()).toBe("Samsung");
  });

  it("Метод getPrice() повертає правильну ціну", () => {
    expect(device.getPrice()).toBe(1000);
  });

  it("Метод displayInfo() повертає правильний рядок", () => {
    expect(device.displayInfo()).toBe("Samsung - Потужність: 150 Вт");
  });
});
