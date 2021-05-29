import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Auth Routes
  {
    path: "quizapp",
    loadChildren: () => import("./core/modules/auth/sign-in/sign-in.module")
    .then(m => m.SignInModule)
  },
  {
    path: "quizapp-signup",
    loadChildren: () => import("./core/modules/auth/sign-up/sign-up.module")
    .then(m => m.SignUpModule)
  },
  {
    path: "quizapp-forgot",
    loadChildren: () => import("./core/modules/auth/forgot-password/forgot-password.module")
    .then(m => m.ForgotPasswordModule)
  },
  {
    path: "quizapp-verification",
    loadChildren: () => import("./core/modules/auth/send-verification/send-verification.module")
    .then(m => m.SendVerificationModule)
  },
  //Web App Routes
  {
    path: "dashboard",
    loadChildren: () => import("./modules/webapp/dashboard/dashboard.module")
    .then(m => m.DashboardModule)
  },
  {
    path: "",
    loadChildren: () => import("./modules/webpage/home/home.module")
    .then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
