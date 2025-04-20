import { Injectable, Optional } from '@angular/core';
import { LogService } from './../logger/log.service';

@Injectable({
  providedIn: 'root',
})
export class RecursionService {
  yy: number = 0;
  private xy = new Map<number, number>();

  constructor(@Optional() private logService: LogService) {}

  getRecursion(x: number, mem: number, mul: number, n: number, sum: number, depth: number = 0): number {
    const min = 1e-12;
    const maxDepth = 1000;
  
    if (depth > maxDepth) {
      console.warn('Maximum recursion depth reached');
      return sum;
    }
  
    mem = (mem * x * (2 * n - 3)) / (2 * n);
    sum += mul * mem;
    mul *= -1;
    n++;
  
    if (Math.abs(mem) > min) {
      return this.getRecursion(x, mem, mul, n, sum, depth + 1);
    } else {
      return sum;
    }
  }
  

  getTab(xn: number = -1, xk: number = 1, h: number = 0.1): Map<number, number> {
    let x = xn;

    while (x <= xk) {
      const firstTerm = x / 2;
      const sumStart = 1 + firstTerm;
      const memStart = firstTerm;
      const mulStart = -1;
      const nStart = 2;

      this.yy = this.getRecursion(x, memStart, mulStart, nStart, sumStart);
      this.xy.set(parseFloat(x.toFixed(2)), this.yy);


      if (this.logService) {
        this.logService.write(`x = ${x.toFixed(2)}, y = ${this.yy.toFixed(6)}`);
      }

      x = parseFloat((x + h).toFixed(10));
    }

    return this.xy;
  }
}
