import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedChartComponent } from './stacked-chart.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],exports:[StackedChartComponent],
  declarations: [StackedChartComponent]
})
export class StackedChartModule { }
