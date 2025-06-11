import { Component } from '@angular/core';
import { ChartsComponent } from '../charts/charts.component';
import { BarchartComponent } from '../barchart/barchart.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { CallAnalyticsComponent } from '../call-analytics/call-analytics.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    ChartsComponent,
    BarchartComponent,
    CardComponent,
    CommonModule,
    CallAnalyticsComponent,
  ],
})
export class DashboardComponent {
  activeTab: any = 'today';

  private dataSets = {
    today: [
      {
        label: 'Total Calls Incoming',
        value: 9232,
      },
      {
        label: 'Answered Calls',
        value: 7293,
      },
      {
        label: 'Abandoned Calls',
        value: 1939,
      },
      {
        label: 'Talk Time',
        value: '730Hrs',
      },
      {
        label: 'Avg Wait Time',
        value: '1Min 50Sec',
      },
      {
        label: 'Avg Call Time',
        value: '6Min 15Sec',
      },
    ],
    week: [
      {
        label: 'Total Calls Incoming',
        value: 45678,
      },
      {
        label: 'Answered Calls',
        value: 38945,
      },
      {
        label: 'Abandoned Calls',
        value: 6733,
      },
      {
        label: 'Talk Time',
        value: '3650Hrs',
      },
      {
        label: 'Avg Wait Time',
        value: '2Min 15Sec',
      },
      {
        label: 'Avg Call Time',
        value: '5Min 45Sec',
      },
    ],
    month: [
      {
        label: 'Total Calls Incoming',
        value: 187654,
      },
      {
        label: 'Answered Calls',
        value: 156789,
      },
      {
        label: 'Abandoned Calls',
        value: 30865,
      },
      {
        label: 'Talk Time',
        value: '15600Hrs',
      },
      {
        label: 'Avg Wait Time',
        value: '2Min 30Sec',
      },
      {
        label: 'Avg Call Time',
        value: '5Min 30Sec',
      },
    ],
  };

  summaryStats = this.dataSets.today;

  onFilterChange(period: 'today' | 'week' | 'month') {
    this.activeTab = period;
    this.summaryStats = this.dataSets[period];
  }
}
