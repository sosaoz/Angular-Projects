import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {

  movie:any;

  constructor( private location:Location,
               private route:ActivatedRoute,
               private _peliService:PeliculasService ) {}

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      console.log(parametros.id);
      this._peliService.movieDetail(parametros['id'])
                       .subscribe( pelicula=> this.movie = pelicula);
    });

  }

  return(){

    this.location.back();

  }

}
