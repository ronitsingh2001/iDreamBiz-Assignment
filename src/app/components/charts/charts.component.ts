import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  imports: [CommonModule, BaseChartDirective],
})
export class ChartsComponent implements OnChanges {
  @Input() timePeriod: 'today' | 'week' | 'month' = 'today';

  public pieChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    cutout: '40%',
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };
  public pieChartLabels = ['Unresolved', 'Resolved', 'Pending'];

  private chartData = {
    today: [500, 400, 100],
    week: [2500, 2000, 2000],
    month: [10000, 8000, 3000],
  };

  public pieChartDatasets = [
    {
      data: this.chartData.today,
      backgroundColor: ['#4F46E5', '#06B6D4', '#FBBF24'],
      borderWidth: 0,
    },
  ];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['timePeriod']) {
      this.pieChartDatasets = [
        {
          data: this.chartData[this.timePeriod],
          backgroundColor: ['#4F46E5', '#06B6D4', '#FBBF24'],
          borderWidth: 0,
        },
      ];
    }
  }
}
