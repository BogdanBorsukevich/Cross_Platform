import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; 
import { MyHeaderComponent } from '../my-header/my-header.component';
import { HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  imports: [IonicModule, CommonModule, MyHeaderComponent, HttpClientModule] 
})
export class CloudPage implements OnInit, AfterViewInit {
  faculties: any[] = [];
  groupedFaculties: { [key: string]: any[] } = {};
  chartInstance: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadFaculties();
  }

  loadFaculties() {
    const jsonUrl = 'https://api.jsonbin.io/v3/b/67c0d54cad19ca34f813b902'; 

    this.http.get(jsonUrl).subscribe((data: any) => {
      if (data && data.record && data.record.faculties) {
        this.faculties = data.record.faculties;
        this.groupFaculties();
        setTimeout(() => this.createChart(), 500); 
      } else {
        console.error('Помилка: JSON не містить "faculties"');
        this.faculties = [];
      }
    }, error => {
      console.error('Помилка завантаження JSON:', error);
    });
  }

  groupFaculties() {
    this.groupedFaculties = this.faculties.reduce((acc: { [key: string]: any[] }, faculty) => {
      acc[faculty.university] = acc[faculty.university] || [];
      acc[faculty.university].push(faculty);
      return acc;
    }, {});
  }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('facultiesChart') as HTMLCanvasElement;
    if (!ctx) return;
  
    if (this.chartInstance) {
      this.chartInstance.destroy(); 
    }
  
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 768;
  
    const labels = Object.keys(this.groupedFaculties).map(name =>
      isMobile && name.length > 10 ? name.substring(0, 10) + "..." : name
    );
  
    const data = Object.values(this.groupedFaculties).map(group => group.length);
  
    this.chartInstance = new Chart(ctx, { 
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Кількість факультетів у університетах',
          data: data,
          backgroundColor: 'rgba(255, 206, 86, 0.6)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              maxRotation: isMobile ? 45 : 0,
              minRotation: isMobile ? 45 : 0,
              font: {
                size: isMobile ? 8 : 12
              }
            }
          }
        }
      }
    });
  }
}  
