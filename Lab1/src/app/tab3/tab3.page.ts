import { Component } from '@angular/core';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  standalone: true,
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  imports: [MyHeaderComponent, IonicModule, CommonModule]
})
export class Tab3Page {

  constructor() { }

  matrix: number[][] = [];
  message: string = '';

  generateMatrix(n: any) {
    try {
      let size = parseInt(n);

      if (isNaN(size) || size <= 0) {
        throw new Error('Please enter a valid number for N.');
      }

      this.matrix = [];
      this.message = '';

      for (let i = 0; i < size; i++) {
        let row: number[] = [];
        for (let j = 0; j < size; j++) {
          row.push(Math.floor(Math.random() * 20) + 1);
        }
        this.matrix.push(row);
      }

      this.message = 'Матриця успішно згенерована.';

    } catch (error) {
      console.log(error);
      this.message = 'Помилка при генерації матриці.';
    }
  }

  getRowColor(row: number[]): string {
    let rowSum = row.reduce((sum, value) => sum + value, 0);
    return rowSum > 50 ? 'lightgreen' : '';
  }

  getRowSum(row: number[]): number {
    return row.reduce((sum, value) => sum + value, 0);
  }
}
