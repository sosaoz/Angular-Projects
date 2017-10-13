import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino:string="";

  buscador:any[] = [] ;

  constructor( public  route:ActivatedRoute,
               public _peliService:PeliculasService ) {
      this.route.params.subscribe(parametros=> {
        console.log(parametros);
        if(parametros['texto']){
          this.termino = parametros['texto'];
          this.searchMovie();
        }
      })
  }

  ngOnInit() {

  }

  searchMovie(){

      if(this.termino.length == 0){
        return;
      }

      else{

        this._peliService.searchMovie( this.termino )
            .subscribe( data=> this.buscador = data );
      }


  }


}
