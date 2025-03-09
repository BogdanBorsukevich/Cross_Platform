import { ElectronicDevice } from './electronic-device';

export class Laptop extends ElectronicDevice {
  ramSize: number;

  constructor(brand: string, price: number, power: number, ramSize: number) {
    super(brand, price, power);
    this.ramSize = ramSize;
  }

  runProgram(programName: string): void {
    console.log(`Запуск програми: ${programName}`);
  }

  override displayInfo(): string {
    return `${super.displayInfo()}, Оперативна пам'ять: ${this.ramSize} ГБ`;
  }
}
