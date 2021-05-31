import { Routes, RouterModule } from '@angular/router';
import { SignUpContainerComponent } from './pages/sign-up-container/sign-up-container.component';

const routes: Routes = [
  {
    path: '', component: SignUpContainerComponent
  },
];

export const SignUpRoutes = RouterModule.forChild(routes);
