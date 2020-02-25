import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartColor } from 'chart.js';
import { Label } from 'ng2-charts';
import { KinoService } from 'src/app/services/kino-service.service';
import { NumberOccurrence, KinobonusOccurrence } from 'src/app/models/occcurrences.interface';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { numbersChartOptions, kinobonusChartOptions, ChartTypeEnum } from '../chart-options';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, AfterViewInit {

  _chartOptions: ChartOptions;
  _chartType: ChartType;
  _chartLegend: boolean = true;
  _chartLabels: Label[] = [];
  _chartData: ChartDataSets[];
  _chart: ChartTypeEnum;
  _chartPlugins = [pluginDataLabels];
  totalDraws: number;

  constructor(private kinoService: KinoService) { }

  @Input() set chart(type: ChartTypeEnum) {
    this._chart = type;
    if (type === ChartTypeEnum.NUMBERS) { this._chartOptions = numbersChartOptions; }
    if (type === ChartTypeEnum.KINOBONUS) { this._chartOptions = kinobonusChartOptions; }
  }

  @Input() set chartType(value: ChartType) {
    this._chartType = value;
  }



  bonusChartColors: ChartColor = 'blue';

  ngOnInit() {
    if (this._chart) {
      this._initChart();
    }
  }

  ngAfterViewInit() {
    // if (this._chart) {
    //   this._initChart();
    //   console.log(this._chart)
    // }
  }

  private _initChart() {
   
      if(this._chart === ChartTypeEnum.NUMBERS) {
        this.kinoService.getNumberOccurrences().subscribe(res => {
          this.totalDraws = parseInt(res.headers.get('X-Total-Count'))
          this.manipulateChartData(res.body as NumberOccurrence, ChartTypeEnum.NUMBERS);
        }, error => { console.log(error) });
      }
      if(this._chart === ChartTypeEnum.KINOBONUS) {
        this.kinoService.getKinobonusOccurrences().subscribe(res => {
          this.totalDraws = parseInt(res.headers.get('X-Total-Count'))
          this.manipulateChartData(res.body as KinobonusOccurrence, ChartTypeEnum.KINOBONUS);
        }, error => { console.log(error) });
      }
  }

  private manipulateChartData(dataset: any, type: ChartTypeEnum) {
    if (!this._chartData) this._chartData = [];

    if (type === ChartTypeEnum.NUMBERS) {
      if (this._chartLabels?.length > 0) this._chartLabels = [];
      let numbers: ChartDataSets = { label: 'Αριθμός', data: [], backgroundColor: '#73C1FE', hoverBackgroundColor: '#20272A',fill:false };
      (dataset as NumberOccurrence).occurences.forEach(oc => {
        numbers.data.push(oc.count);
        this._chartLabels.push(oc.number.toString());
      });
      this._chartData.push(numbers);
    }
    if (type === ChartTypeEnum.KINOBONUS) {
      if (this._chartLabels?.length > 0) this._chartLabels = [];
      let kinobonus: ChartDataSets = { label: 'Kinobonus', data: [], backgroundColor: '#EFB31D', hoverBackgroundColor: '#20272A' };
      (dataset as KinobonusOccurrence).occurences.forEach(oc => {
        kinobonus.data.push(oc.count);
        this._chartLabels.push(oc.kinobonus.toString());
      });     
      this._chartData.push(kinobonus);
    }
  }

}
