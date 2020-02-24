import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { KinoService } from 'src/app/services/kino-service.service';
import { NumberOccurrence } from 'src/app/models/occcurrences.interface';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  // numberOccurrences:NumberOccurrence;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[];

  constructor(private kinoService:KinoService) { }

  ngOnInit() {
    // Promise.all(
    //   this.kinoService.getNumberOccurrences().toPromise()
    // ).then((res)=>{}).catch(error=>{})
    this.kinoService.getNumberOccurrences()
    .subscribe(res=>{
      // this.numberOccurrences = res.body as NumberOccurrence;
      this.manipulateChartData(res.body as NumberOccurrence);
    },error=>{
      console.log(error);
    });
  }

  private manipulateChartData(data:NumberOccurrence){
    if(!this.barChartData) this.barChartData=[];
    // = [
    //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    // ]

    let dataset:ChartDataSets={label:'Εμφανήσεις',data:[]};
    data.occurences.forEach(oc=>{
      dataset.data.push(oc.count);
      this.barChartLabels.push(oc.number.toString());
    });
    this.barChartData.push(dataset);
  }
}
