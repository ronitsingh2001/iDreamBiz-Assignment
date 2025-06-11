import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CallAnalyticsComponent } from './components/call-analytics/call-analytics.component';
import { NotFoundComponent } from './components/404/404.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'call',
        component: CallAnalyticsComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];
