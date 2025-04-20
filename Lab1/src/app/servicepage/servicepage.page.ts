import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { TabService } from '../service/tab/tab.service';
import { SeriesService } from '../service/series/series.service';
import { RecursionService } from '../service/recursion/recursion.service';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MyHeaderComponent, NgChartsModule]
})
export class ServicepagePage implements OnInit {

  xn: number = -1;
  xk: number = 1;
  h: number = 0.2;

  xx: number[] = [];
  yyTab: number[] = [];
  xySeries = new Map<number, number>();
  xyRecursion = new Map<number, number>();
  yySer: number[] = [];
  yyRec: number[] = [];
  xyInput: string[] = [];

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };
  public chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          font: {
            size: 12
          }
        }
      }
    }
  };

  constructor(
    private tabService: TabService,
    private seriesService: SeriesService,
    private recursionService: RecursionService
  ) {}

  ngOnInit() {}

  ras() {
    try {
      this.xx = [];
      this.yyTab = [];
  
      console.log('Табулювання');
      const obj = this.tabService.getTab(this.xn, this.xk, this.h);
      this.xx = obj.x.map(x => parseFloat(x));
      this.yyTab = obj.y;
  
      console.log('Ряд');
      this.xySeries = this.seriesService.getTab(this.xn, this.xk, this.h);
  
      console.log('Рекурсія');
      this.xyRecursion = this.recursionService.getTab(this.xn, this.xk, this.h);
  
      this.input();
      this.updateChart();
  
    } catch (error) {
      console.error('Помилка під час обчислення:', error);
    }
  }
  

  input() {
    this.yySer = [];
    this.yyRec = [];
    this.xyInput = [];

    this.xx.forEach((value, index) => {
      let s = '';
      let y: number = 0;

      y = this.yyTab[index];
      s = y.toFixed(4) + ' ';

      y = this.xySeries.get(value) ?? 0;
      this.yySer.push(y);
      s += y.toFixed(4);

      y = this.xyRecursion.get(value) ?? 0;
      this.yyRec.push(y);
      s += ' ' + y.toFixed(4);

      this.xyInput.push(s);
    });
  }

  updateChart() {
    this.lineChartData = {
      labels: this.xx.map(x => x.toFixed(2)),
      datasets: [
        { data: this.yyTab, label: 'Табулювання', borderColor: 'blue', fill: false },
        { data: this.yySer, label: 'Ряд', borderColor: 'green', fill: false },
        { data: this.yyRec, label: 'Рекурсія', borderColor: 'red', fill: false },
      ]
    };
  }
  

}

