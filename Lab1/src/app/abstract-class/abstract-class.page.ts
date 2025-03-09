import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; 
import { MyHeaderComponent } from '../my-header/my-header.component';
import { HttpClientModule } from '@angular/common/http';
import { Phone } from '../class/abstract/phone';
import { Laptop } from '../class/abstract/laptop';
import { ElectronicDevice } from '../class/abstract/electronic-device';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [IonicModule,  
    CommonModule, 
    MyHeaderComponent, 
    HttpClientModule,
  ]
})
export class AbstractClassPage implements OnInit {
  devices: ElectronicDevice[] = [];
  cheapestDevice: ElectronicDevice | null = null;
  private jsonBinUrl = 'https://api.jsonbin.io/v3/b/67cccbb0acd3cb34a8f753c3'; // Замініть на власний URL

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadDevices();
  }

  loadDevices() {
    this.http.get<any>(this.jsonBinUrl).subscribe(response => {
      const rawDevices = response.record.devices; // JSONBin повертає дані всередині `record`
      this.devices = rawDevices
        .map((device: any): ElectronicDevice | null => {
          if (device.type === 'phone') {
            return new Phone(device.brand, device.price, device.power, device.batteryLife);
          } else if (device.type === 'laptop') {
            return new Laptop(device.brand, device.price, device.power, device.ramSize);
          }
          return null;
        })
        .filter((device: ElectronicDevice | null): device is ElectronicDevice => device !== null);

      this.cheapestDevice = this.findCheapestDevice();
    });
  }

  findCheapestDevice(): ElectronicDevice | null {
    if (this.devices.length === 0) return null; // Перевірка на порожній масив
    return this.devices.reduce((cheapest, device) =>
      device.getPrice() < cheapest.getPrice() ? device : cheapest
    );
  }
}
