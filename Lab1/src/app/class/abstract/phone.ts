import { ElectronicDevice } from './electronic-device';

export class Phone extends ElectronicDevice {
  batteryLife: number;

  constructor(brand: string, price: number, power: number, batteryLife: number) {
    super(brand, price, power);
    this.batteryLife = batteryLife;
  }

  makeCall(): void {
    console.log('Making a call...');
  }

  override displayInfo(): string {
    return `${super.displayInfo()}, Час роботи: ${this.batteryLife} год`;
  }
}
