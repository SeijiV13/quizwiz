import { SharedComponentsModule } from './../../../../shared/components/shared-components.module';
import { SignUpRoutes } from './sign-up.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpContainerComponent } from './pages/sign-up-container/sign-up-container.component';
import { SignUpBoxComponent } from './components/sign-up-box/sign-up-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignUpContainerComponent,
    SignUpBoxComponent
  ],
  imports: [
    SharedComponentsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignUpRoutes
  ]
})
export class SignUpModule { }
