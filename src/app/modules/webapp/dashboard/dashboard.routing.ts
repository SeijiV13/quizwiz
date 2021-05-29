import { DashboardContainerComponent } from './pages/dashboard-container/dashboard-container.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: DashboardContainerComponent
  },
];

export const DashboardRoutes = RouterModule.forChild(routes);
