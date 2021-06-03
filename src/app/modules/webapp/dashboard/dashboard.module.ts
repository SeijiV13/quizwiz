import { DashboardRoutes } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './pages/dashboard-container/dashboard-container.component';



@NgModule({
  declarations: [
    DashboardContainerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutes
  ]
})
export class DashboardModule { }
