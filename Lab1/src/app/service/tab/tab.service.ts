import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';
import { SeriesService } from '../series/series.service';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private xx: string[] = [];
  private yy: number[] = [];

  constructor(
    private seriesService: SeriesService,
    @Optional() private logService?: LogService
  ) {}

  getTab(xn: number, xk: number, h: number): { x: string[]; y: number[] } {
    let x = xn;

    this.xx = [];
    this.yy = [];

    while (x <= xk) {
      const y = this.seriesService.getSeries(x);

      this.xx.push(x.toFixed(2));
      this.yy.push(Number(y.toFixed(4)));

      if (this.logService) {
        this.logService.write(`x = ${x.toFixed(2)}, y = ${y.toFixed(4)}`);
      }

      x = parseFloat((x + h).toFixed(10));
    }

    return { x: this.xx, y: this.yy };
  }
}
