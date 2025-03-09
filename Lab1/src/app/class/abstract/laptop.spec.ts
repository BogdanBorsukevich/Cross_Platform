import { Laptop } from './laptop';
import { ElectronicDevice } from './electronic-device';

describe('Laptop Testing', () => {
  let laptop: Laptop;

  beforeEach(() => {
    laptop = new Laptop("Apple", 1500, 85, 16);
  });

  it("Створення екземпляра класу Laptop", () => {
    expect(laptop).toBeTruthy();
  });

  it("Laptop є екземпляром ElectronicDevice", () => {
    expect(laptop).toBeInstanceOf(ElectronicDevice);
  });

  it("Метод displayInfo() повертає правильний рядок", () => {
    const info = laptop.displayInfo();
    expect(info).toContain("Оперативна пам'ять: 16 ГБ");
  });

  it("Виклик runProgram() не викликає помилок", () => {
    expect(() => laptop.runProgram("Photoshop")).not.toThrow();
  });
});
