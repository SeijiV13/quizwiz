import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInContainerComponent } from './pages/sign-in-container/sign-in-container.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';



@NgModule({
  declarations: [
    SignInContainerComponent,
    LoginBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SignInModule { }
