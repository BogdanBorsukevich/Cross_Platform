import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private xy = new Map<number, number>();

  constructor(@Optional() private logService: LogService) {}

  getSeries(x: number): number {
    let sum = 1;
    let term = 1;
    let n = 1;
    const min = 1e-12;

    while (true) {
      term = term * (0.5 - n + 1) * x / n;
      if (Math.abs(term) < min) break;
      sum += term;
      n++;
    }

    return sum;
  }

  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1): Map<number, number> {
    let x = xn;

    while (x <= xk) {
      const y = this.getSeries(x);

      if (this.logService) {
        this.logService.write(`x = ${x.toFixed(2)}, y = ${y.toFixed(4)}`);
      }

      this.xy.set(parseFloat(x.toFixed(2)), y);
      x = parseFloat((x + h).toFixed(10));
    }

    return this.xy;
  }
}

