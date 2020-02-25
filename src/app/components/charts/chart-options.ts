import { ChartOptions, ChartType, ChartDataSets, ChartColor } from 'chart.js';

export enum ChartTypeEnum{
    NUMBERS='NUMBERS',
    KINOBONUS='KINOBONUS'
}
export const numbersChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
        datalabels: {
            anchor: 'end',
            align: 'end',
        }
    }
};

export const kinobonusChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
        datalabels: {
            anchor: 'end',
            align: 'end',
        }
    }
};

export const stackedChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{stacked:true}], yAxes: [{stacked:true}] },
    plugins: {
        datalabels: {
            anchor: 'end',
            align: 'end',
        }
    }
};