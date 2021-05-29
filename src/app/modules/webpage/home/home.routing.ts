import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './pages/home-container/home-container.component';

const routes: Routes = [
  {
    path: '', component: HomeContainerComponent
  },
];

export const HomeRoutes = RouterModule.forChild(routes);
