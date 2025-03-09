import { Component } from '@angular/core';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  standalone: true,
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  imports: [MyHeaderComponent, IonicModule]
})
export class Tab2Page {

  constructor() { }

  a: number = 0;
  b: number = 0;
  sum: number = 0;
  divisibleNumbers: number[] = [];

  isValid(num: number): boolean {
    return num % 17 === 0 && num % 4 === 2;
  }

  calculate(a1: any, b1: any) {
    try {
      this.a = parseInt(a1);
      this.b = parseInt(b1);

      this.sum = 0;
      this.divisibleNumbers = [];

      for (let i = this.a; i <= this.b; i++) {
        if (this.isValid(i)) {
          this.divisibleNumbers.push(i);
          this.sum += i;
        }
      }

    } catch (error) {
      console.log(error);
    }
  }
}