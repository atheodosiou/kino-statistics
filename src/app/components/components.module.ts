import { NgModule } from "@angular/core";
import { KinoTableModule } from './kino-table/kino-table.module';
import { BarChartModule } from './charts/bar-chart/bar-chart.module';

@NgModule({
    imports:[KinoTableModule,BarChartModule],
    exports:[KinoTableModule,BarChartModule]
})
export class ComponentsModule{}