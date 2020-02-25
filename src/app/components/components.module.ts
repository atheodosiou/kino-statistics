import { NgModule } from "@angular/core";
import { KinoTableModule } from './kino-table/kino-table.module';
import { BarChartModule } from './charts/bar-chart/bar-chart.module';
import { StackedChartModule } from './charts/stacked-chart/stacked-chart.module';

@NgModule({
    imports:[KinoTableModule,BarChartModule,StackedChartModule],
    exports:[KinoTableModule,BarChartModule,StackedChartModule]
})
export class ComponentsModule{}