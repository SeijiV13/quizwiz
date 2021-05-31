import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/core/auth/firebase-auth.service';

@Component({
  selector: 'app-sign-up-container',
  templateUrl: './sign-up-container.component.html',
  styleUrls: ['./sign-up-container.component.scss']
})
export class SignUpContainerComponent implements OnInit {

  constructor(private authService: FirebaseAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(event: {action: string, value: {email: string, password: string}}) {
    this.authService.signUp(event.value.email, event.value.password);
  }

  changeRoute(route: string) {
    this.router.navigate([route]);
  }

}
