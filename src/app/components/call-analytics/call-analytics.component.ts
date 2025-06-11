import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-call-analytics',
  templateUrl: './call-analytics.component.html',
  imports: [CommonModule],
})
export class CallAnalyticsComponent {
  activeTab = 'history';
  statusFilter = 'all';

  private allRows = [
    {
      name: 'Ritik Beniwal',
      info: 'Lead',
      issue: 'KYC',
      status: 'UnResolved',
      comment: 'Lorem ipsum',
      callStatus: 'Rescheduled',
      date: '20 Apr 2025',
      time: '01:12 PM | 04:12 min',
    },
    {
      name: 'Manpreet Singh',
      info: 'Opportunity',
      issue: 'e-Mandate',
      status: 'Resolved',
      comment: 'Lorem ipsum',
      callStatus: 'Scheduled',
      date: '20 Apr 2025',
      time: '01:12 PM | 04:12 min',
    },
    {
      name: 'Avika Sharma',
      info: 'NACH',
      issue: 'e-Mandate',
      status: 'Pending',
      comment: 'Lorem ipsum',
      callStatus: 'Ended',
      date: '20 Apr 2025',
      time: '01:12 PM | 04:12 min',
    },
    {
      name: 'Ritik Beniwal',
      info: 'Lead',
      issue: 'KYC',
      status: 'UnResolved',
      comment: 'Lorem ipsum',
      callStatus: 'Rescheduled',
      date: '20 Apr 2025',
      time: '01:12 PM | 04:12 min',
    },
    {
      name: 'Manpreet Singh',
      info: 'Opportunity',
      issue: 'e-Mandate',
      status: 'Resolved',
      comment: 'Lorem ipsum',
      callStatus: 'Scheduled',
      date: '20 Apr 2025',
      time: '01:12 PM | 04:12 min',
    },
    {
      name: 'Avika Sharma',
      info: 'NACH',
      issue: 'e-Mandate',
      status: 'Pending',
      comment: 'Lorem ipsum',
      callStatus: 'Ended',
      date: '20 Apr 2025',
      time: '01:12 PM | 04:12 min',
    },
    {
      name: 'Ritik Beniwal',
      info: 'Lead',
      issue: 'KYC',
      status: 'UnResolved',
      comment: 'Lorem ipsum',
      callStatus: 'Rescheduled',
      date: '20 Apr 2025',
      time: '01:12 PM | 04:12 min',
    },
    {
      name: 'Manpreet Singh',
      info: 'Opportunity',
      issue: 'e-Mandate',
      status: 'Resolved',
      comment: 'Lorem ipsum',
      callStatus: 'Scheduled',
      date: '20 Apr 2025',
      time: '01:12 PM | 04:12 min',
    },
    {
      name: 'Avika Sharma',
      info: 'NACH',
      issue: 'e-Mandate',
      status: 'Pending',
      comment: 'Lorem ipsum',
      callStatus: 'Ended',
      date: '20 Apr 2025',
      time: '01:12 PM | 04:12 min',
    },
  ];

  get rows() {
    if (this.activeTab === 'history') {
      return this.allRows;
    }
    return this.allRows.filter(
      (row) => row.status.toLowerCase() !== 'resolved'
    );
  }

}
