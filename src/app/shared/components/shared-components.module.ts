import { FormErrorDisplayComponent } from './form-error-display/form-error-display.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FormErrorDisplayComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FormErrorDisplayComponent
  ]
})
export class SharedComponentsModule { }
