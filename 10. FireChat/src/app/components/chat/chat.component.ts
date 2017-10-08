import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {

  mensaje:string="";
  elemento:any;

  constructor( public _cs:ChatService ) {
    this._cs.cargarMensajes().subscribe(()=>{
      console.log("Mensaje Cargados...");
      setTimeout(
        () => this.elemento.scrollTop = this.elemento.scrollHeight, 100 );

    })
  }

  ngOnInit() {
    this.elemento = document.getElementById("app-mensajes");
  }

  enviar(){

    if( this.mensaje.length == 0){
      return;
    }

    this._cs.agregarMensaje( this.mensaje ).then( ()=>console.log("Hecho!") );

    this.mensaje = "";
  }

}
