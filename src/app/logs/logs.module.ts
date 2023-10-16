import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogsPageRoutingModule } from './logs-routing.module';

import { LogsPage } from './logs.page';

import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogsPageRoutingModule
  ],
  declarations: [LogsPage, ChartComponent]
})
export class LogsPageModule {}
