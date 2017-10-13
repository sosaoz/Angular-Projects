import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  buscarPeliculas( texto:string ){
    if(texto.length == 0){
    return;
    }

    this.router.navigate([ 'search', texto ])

  }
}
