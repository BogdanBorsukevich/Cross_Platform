import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { AbstractClassPage } from './abstract-class/abstract-class.page';
import { MyHeaderComponent } from './my-header/my-header.component';

@NgModule({
  declarations: [AbstractClassPage, MyHeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    AbstractClassPageModule,
    NgChartsModule
  ]
  
})
export class AbstractClassPageModule { }
