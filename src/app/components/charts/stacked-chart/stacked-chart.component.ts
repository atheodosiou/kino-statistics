import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { ChartTypeEnum, stackedChartOptions } from '../chart-options';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { KinoService } from 'src/app/services/kino-service.service';
import { NumberOccurrence, KinobonusOccurrence } from 'src/app/models/occcurrences.interface';
@Component({
  selector: 'stacked-chart',
  templateUrl: './stacked-chart.component.html',
  styleUrls: ['./stacked-chart.component.scss']
})
export class StackedChartComponent implements OnInit {

  _chartOptions: ChartOptions = stackedChartOptions;
  _chartType: ChartType='bar';
  _chartLegend: boolean = true;
  _chartLabels: Label[] = [];
  _chartData: ChartDataSets[];
  _chart: ChartTypeEnum;
  // _chartPlugins = [pluginDataLabels];
  _chartPlugins = [];
  totalDraws: number;

  constructor(private kinoService:KinoService) { }

  async ngOnInit() {
    // this._chartLabels=[]
    await this._getData();
    console.log('Data loaded!')
  }

  private async _getData(){
    const dataSet = await Promise.all([
      this.kinoService.getNumberOccurrences().toPromise(),
      this.kinoService.getKinobonusOccurrences().toPromise()
    ]);
    console.log('dataset',dataSet[0].body, dataSet[1].body)
    this.manipulateChartData(dataSet[0].body,dataSet[1].body)
  }

  private manipulateChartData(datasetOne:NumberOccurrence,datasetTwo:KinobonusOccurrence){
    if(!this._chartData)this._chartData=[];
    if(!this._chartLabels)this._chartLabels=[];

    let numbers: ChartDataSets = { label: 'Αριθμός', data: [],stack:'A'};
    let kinobonus: ChartDataSets = { label: 'Kinobonus', data: [], stack:'b'};
    
    datasetOne.occurences.forEach(oc => {
      if(!numbers.data)numbers.data=[];
      numbers.data.push(oc.count);
      this._chartLabels.push(oc.number.toString());
    });  
    

    datasetTwo.occurences.forEach(oc => {
      if(!kinobonus.data)kinobonus.data=[];
      kinobonus.data.push(oc.count);
    });

    this._chartData.push(numbers);
    this._chartData.push(kinobonus);

    
    // console.log(this._chartLabels,numbers,kinobonus)
    console.log(this._chartLabels,this._chartData);
    // this._chartLabels=['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    // this._chartData=[
    //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', stack: 'a' },
    //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', stack: 'a' }
    // ]
  }

}
