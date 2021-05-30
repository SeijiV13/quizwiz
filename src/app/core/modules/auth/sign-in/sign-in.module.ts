import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInContainerComponent } from './pages/sign-in-container/sign-in-container.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { SignInRoutes } from './sign-in.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignInContainerComponent,
    LoginBoxComponent
  ],
  imports: [
    CommonModule,
    SignInRoutes,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignInModule { }
