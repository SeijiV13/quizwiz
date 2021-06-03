import { CryptoService } from './../crypto/crypto.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageRetrieverService<T> {

  constructor(private crypto: CryptoService) { }

  getMessages(key: T, type: string): string {
    const source = this.getJsonMessages(type === 'success' ? 'success' : 'error');
    if(typeof(key) === 'string') {
       const messages = source;
       return messages[key]
    } else if(Array.isArray(key)) {
       let messages = source;
       for(const data of key) {
         messages = messages[data];
       }
       return messages;
    }
  }

  private getJsonMessages(type: string) {
    if(type === 'success') {
      return JSON.parse(this.crypto.decryptData(localStorage.getItem('msgscs')));

    }
   return  JSON.parse(this.crypto.decryptData(localStorage.getItem('msgerr')));
  }
}
