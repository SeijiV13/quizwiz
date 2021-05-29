import { SignInContainerComponent } from './pages/sign-in-container/sign-in-container.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: SignInContainerComponent
   },
];

export const SignInRoutes = RouterModule.forChild(routes);
