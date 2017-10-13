import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera:any;

  populares:any;

  ninos:any;

  constructor( private  _pelisService:PeliculasService) {}


  ngOnInit() {

    this._pelisService.getNew()
                      .subscribe( data =>{
                        console.log(data);
                        this.cartelera = data
                      });

   this._pelisService.getPopulars()
                     .subscribe( data =>{
                       console.log(data);
                       this.populares = data
                     });

   this._pelisService.getforKids()
                     .subscribe( data =>{
                       console.log(data);
                       this.ninos = data
                      });

  }



}
