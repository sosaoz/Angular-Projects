import { Injectable } from '@angular/core';

//FireBase Libraries
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

//Interfaces
import { Mensaje } from '../interfaces/mensaje.interface';

@Injectable()
export class ChatService {

  chats: Observable<any[]>;
  usuario:any = null;

  constructor( private af:AngularFireDatabase,
               private afAuth:AngularFireAuth) {

    if(localStorage.getItem('usuario')){
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    }
  }

  cargarMensajes(){

    this.chats = this.af.list('chats', ref => ref.limitToLast(20) )
                        .valueChanges();

    return this.chats;
  }


  agregarMensaje( texto:string ){

    let mensaje:Mensaje ={
      nombre:this.usuario.displayName,
      mensaje: texto,
      uid: this.usuario.uid 
    }

    const amRef = this.af.list('chats');

    return amRef.push(mensaje);

  }

  login( provider:string ) {

    let pRef:any;

    if(provider == "google" ){
      pRef = new firebase.auth.GoogleAuthProvider();
    }

    else{
      pRef = new firebase.auth.TwitterAuthProvider();
    }

    this.afAuth.auth
               .signInWithPopup(pRef)
               .then( data=>{
                 console.log(data);
                 this.usuario = data.user;
                 localStorage.setItem('usuario', JSON.stringify(this.usuario))
               } );
  }
  logout() {
    localStorage.removeItem('usuario');
    this.usuario = null;
    this.afAuth.auth.signOut();
  }
}
