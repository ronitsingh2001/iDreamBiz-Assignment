import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  imports: [CommonModule, BaseChartDirective],
})
export class BarchartComponent implements OnChanges {
  @Input() timePeriod: 'today' | 'week' | 'month' = 'today';

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#334554',
          font: { size: 14 }
        }
      },
      title: { display: false }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#334554', font: { size: 10 } }
      },
      y: {
        beginAtZero: true,
        grid: { color: '#e5e7eb' },
        ticks: { color: '#334554', font: { size: 12 } }
      }
    }
  };

  public barChartLabels = [
    'KYC',
    'e-Mandate',
    'AA',
    'API',
    'Loyalty'
  ];

  private chartData = {
    today: [400, 1300, 250, 400, 1000],
    week: [2000, 6500, 1250, 2000, 5000],
    month: [8000, 26000, 5000, 8000, 20000]
  };

  public barChartDatasets = [
    {
      label: 'Today',
      data: this.chartData.today,
      backgroundColor: '#4F46E5', 
      borderRadius: 8,
      barPercentage: 0.1,
    },
  ];

  public barChartLegend = true;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['timePeriod']) {
      this.barChartDatasets = [
        {
          label: this.timePeriod.charAt(0).toUpperCase() + this.timePeriod.slice(1),
          data: this.chartData[this.timePeriod],
          backgroundColor: '#4F46E5',
          borderRadius: 8,
          barPercentage: 0.1,
        },
      ];
    }
  }
}
