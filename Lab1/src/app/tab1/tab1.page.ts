import { Component } from '@angular/core';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  imports: [MyHeaderComponent, IonicModule]
})
export class Tab1Page {

  constructor() { }

  a: number = 0;
  b: number = 0;
  c: number = 0;
  count: number = 0;

  isValid(num: number): boolean {
    if (num % 27 === 0) {
      const sumOfDigits = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
      return sumOfDigits % 2 !== 0;
    }
    return false;
  }

  calculate(a1: any, b1: any, c1: any) {
    try {
      this.a = parseInt(a1);
      this.b = parseInt(b1);
      this.c = parseInt(c1);
      this.count = 0;

      if (this.isValid(this.a)) this.count++;
      if (this.isValid(this.b)) this.count++;
      if (this.isValid(this.c)) this.count++;

    } catch (error) {
      console.log(error);
    }
  }
}