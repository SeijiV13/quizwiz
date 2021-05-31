import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {
  @Output() emitLogin = new EventEmitter<
    {action : string,
    value: {email: string, password: string}}>();
  form: FormGroup;
  //flags
  passwordVisible = false;
  @Output() emitRoute = new EventEmitter<string>();
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  submitForm(action: string) {
    if(this.form.valid || action == 'google') {
      this.emitLogin.emit({action, value: this.form.getRawValue()});
      return;
    }
    this.toastr.error("Error", "test");
  }

  changeRoute(route: string) {
    this.emitRoute.emit(route);
  }

  showPassword() {
    this.passwordVisible = !this.passwordVisible;
  }

}
