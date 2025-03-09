export class ElectronicDevice {
    brand: string;
    price: number;
    power: number;
  
    constructor(brand: string, price: number, power: number) {
      this.brand = brand;
      this.price = price;
      this.power = power;
    }
  
    getBrand(): string {
      return this.brand;
    }
  
    getPrice(): number {
      return this.price;
    }
  
    displayInfo(): string {
      return `${this.getBrand()} - Потужність: ${this.power} Вт`;
    }
  }
  