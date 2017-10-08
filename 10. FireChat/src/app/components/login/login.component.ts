import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  constructor( public _cs:ChatService ) { }

  ingresar( provider:string ){

    this._cs.login( provider );

  }


}
