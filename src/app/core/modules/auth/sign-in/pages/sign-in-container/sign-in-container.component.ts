import { FirebaseAuthService } from './../../../../../auth/firebase-auth.service';
import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-container',
  templateUrl: './sign-in-container.component.html',
  styleUrls: ['./sign-in-container.component.scss']
})
export class SignInContainerComponent implements OnInit {

  constructor(private authService: FirebaseAuthService, private route: Router) { }

  ngOnInit(): void {
  }

  loginUser(event: {action: string, value: {email: string, password: string}}) {
    if(event.action === 'google')
    this.authService.googleAuth().then();
  }

  changeRoute(route: string) {
    this.route.navigate([route]);
  }

}
