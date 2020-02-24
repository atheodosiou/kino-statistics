import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { KinoService } from 'src/app/services/kino-service.service';
import { NumberOccurrence, KinobonusOccurrence } from 'src/app/models/occcurrences.interface';
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
    Promise.all([
      this.kinoService.getNumberOccurrences().toPromise(),
      this.kinoService.getKinobonusOccurrences().toPromise()
    ]).then((res)=>{
      console.log((res[0].body as NumberOccurrence),(res[1].body as KinobonusOccurrence))
      this.manipulateChartData(res[0].body as NumberOccurrence,res[1].body as KinobonusOccurrence);
    }).catch(error=>{console.log(error)});
    // this.kinoService.getNumberOccurrences()
    // .subscribe(res=>{
    //   this.manipulateChartData(res.body as NumberOccurrence);
    // },error=>{
    //   console.log(error);
    // });
  }

  private manipulateChartData(numberData:NumberOccurrence,kinobonusData:KinobonusOccurrence){
    if(!this.barChartData) this.barChartData=[];
    // = [
    //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    // ]

    let numbers:ChartDataSets={label:'Αριθμός',data:[]};
    let kinobonus:ChartDataSets={label:'Kinobonus',data:[]};
    
    numberData.occurences.forEach(oc=>{
      numbers.data.push(oc.count);
      this.barChartLabels.push(oc.number.toString());
    });
    kinobonusData.occurences.forEach(oc=>{
      kinobonus.data.push(oc.count);
    });
    this.barChartData.push(numbers);
    this.barChartData.push(kinobonus);
  }
}
