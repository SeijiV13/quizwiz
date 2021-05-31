import { CryptoService } from './shared/crypto/crypto.service';
import { MessageService } from './core/initializers/message.initializer';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

//Angular Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//UI
import { ToastrModule } from 'ngx-toastr';
//HTTP
import {HttpClientModule} from '@angular/common/http';

//Message Initializers
export function initializeAppSuccess(messageService: MessageService, cryptoService: CryptoService) {
  return (): Promise<any> => {

    return messageService.InitSuccess().then(data =>{
      localStorage.setItem('msgscs', cryptoService.encryptData(JSON.stringify(data)));
    });
  }
}
export function initializeAppError(messageService: MessageService, cryptoService: CryptoService) {
  return (): Promise<any> => {

    return messageService.InitError().then(data =>{
      localStorage.setItem('msgerr', cryptoService.encryptData(JSON.stringify(data)));
    });
  }
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    //For Firebase Modules
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    //UI
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
    }),
    //HTTP
    HttpClientModule,
    NgbModule,
  ],
  providers: [MessageService, CryptoService,
  { provide: APP_INITIALIZER, useFactory: initializeAppSuccess, deps: [MessageService, CryptoService], multi: true},
  { provide: APP_INITIALIZER, useFactory: initializeAppError, deps: [MessageService, CryptoService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
