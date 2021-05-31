import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from 'src/app/shared/validators/form-validators';

@Component({
  selector: 'app-sign-up-box',
  templateUrl: './sign-up-box.component.html',
  styleUrls: ['./sign-up-box.component.scss']
})
export class SignUpBoxComponent implements OnInit {
  @Output() emitRegister = new EventEmitter<{action: string,
    value: { email: string , password: string}}>();
  @Output() emitRoute = new EventEmitter<string>();
  form: FormGroup;
  //flags
  passwordVisible = false;
  confirmPasswordVisible = false;
    constructor(private formBuilder: FormBuilder) { }
  //Validatores
  formValidators =new FormValidators();
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validator: this.formValidators.passwordMatchValidator
    }
    );

  }


  submitForm(action: string) {
    if(this.form.valid) {
      this.emitRegister.emit({action, value: this.form.getRawValue()});
      return;
    }
     console.log(Object.keys(this.form.controls));

  }

  changeRoute(route: string) {
    this.emitRoute.emit(route);
  }

  showPassword(input: string) {
    if(input === 'password') {
      this.passwordVisible = !this.passwordVisible;
      return;
    }

    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

}
