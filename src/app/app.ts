import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CallAnalyticsComponent } from "./components/call-analytics/call-analytics.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SidebarComponent, DashboardComponent, CallAnalyticsComponent, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'assessment';
}
