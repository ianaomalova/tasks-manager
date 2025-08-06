import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexFill,
  ApexTooltip, NgApexchartsModule,
} from 'ng-apexcharts';
import { ChartComponent } from 'chart.js';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  imports: [
    NgApexchartsModule
  ],
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {
  @ViewChild('chart') chart!: ChartComponent;
  viewMode: 'month' | 'year' = 'month';

  public chartOptionsMonth: ChartOptions = {
    series: [
      {
        name: 'Projects',
        data: [20, 15, 30, 38, 28, 14, 22, 1, 5, 9, 45, 11],
      },
    ],
    chart: {
      type: 'area',
      height: 290,
      width: '100%',
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['#725cee'],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    tooltip: {
      enabled: true,
      theme: 'light',
      y: {
        formatter: (val: number) => `${val} Projects`, // Формат подсказки
      },
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        return `<div style="background: white; padding: 5px; border-radius: 5px;">
                  ${series[seriesIndex][dataPointIndex]} Projects
                </div>`;
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          colors: '#6B7280',
        },
      },
    },
  };

  chartOptionsYear: ChartOptions = {
    series: [{ name: 'Projects', data: [250, 320, 180, 420, 390] }],
    chart: { type: 'area', height: 290, toolbar: { show: false } },
    xaxis: { categories: ['2019', '2020', '2021', '2022', '2023'] },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2, colors: ['#8b5cf6'] },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.3,
        opacityTo: 0.05,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      enabled: true,
      theme: 'light',
      y: {
        formatter: (val: number) => `${val} Projects`, // Формат подсказки
      },
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        return `<div style="background: white; padding: 5px; border-radius: 5px;">
                  ${series[seriesIndex][dataPointIndex]} Projects
                </div>`;
      },
    },
  };

  switchView(mode: 'month' | 'year') {
    this.viewMode = mode;
  }

  constructor() {}

}
