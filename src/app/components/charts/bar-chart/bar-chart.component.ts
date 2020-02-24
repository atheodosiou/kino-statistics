import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartColor } from 'chart.js';
import { Label } from 'ng2-charts';
import { KinoService } from 'src/app/services/kino-service.service';
import { NumberOccurrence, KinobonusOccurrence } from 'src/app/models/occcurrences.interface';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

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

  public bonusChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar'
  public pieChartType: ChartType = 'bar'
  bonusChartColors:ChartColor='blue';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[];
  public pieChartData: ChartDataSets[];

  constructor(private kinoService:KinoService) { }

  ngOnInit() {
    Promise.all([
      this.kinoService.getNumberOccurrences().toPromise(),
      this.kinoService.getKinobonusOccurrences().toPromise()
    ]).then((res)=>{
      console.log((res[0].body as NumberOccurrence),(res[1].body as KinobonusOccurrence))
      this.manipulateChartData(res[0].body as NumberOccurrence,res[1].body as KinobonusOccurrence);
    }).catch(error=>{console.log(error)});
  }

  private manipulateChartData(numberData:NumberOccurrence,kinobonusData:KinobonusOccurrence){
    if(!this.barChartData) this.barChartData=[];
    if(!this.pieChartData) this.pieChartData=[];
    // = [
    //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    // ]

    let numbers:ChartDataSets={label:'Αριθμός',data:[],backgroundColor:'#73C1FE',hoverBackgroundColor:'#20272A'};
    let kinobonus:ChartDataSets={label:'Kinobonus',data:[],backgroundColor:'#EFB31D',hoverBackgroundColor:'#20272A'};
    
    let percentageSum=0;
    numberData.occurences.forEach(oc=>{
      numbers.data.push(oc.count);      
      this.barChartLabels.push(oc.number.toString());
    });
    console.log(percentageSum)
    kinobonusData.occurences.forEach(oc=>{
      kinobonus.data.push(oc.count);
    });
    this.barChartData.push(numbers);
    this.pieChartData.push(kinobonus);
  }
}
