import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  })
  export class MessageService  {
    constructor(private http: HttpClient) { }
    InitSuccess() {
      return this.http.get("assets/messages/success.json").toPromise()
    }

    InitError() {
      return this.http.get("assets/messages/errors.json").toPromise()
    }
  }
