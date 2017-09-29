import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {

  artistas:any [] = [];

  urlBusqueda:string ="https://api.spotify.com/v1/search";
  urlArtista:string ="https://api.spotify.com/v1/artists";
  token:string ="Bearer BQCdwMdTSxDkYGVU8TXYwdid_qL-nxdaWT9tAM6UJc1oZCV45ZNTWiLYe7Xy4U9ep_dK_mkWrkwwRLaKJQad3g";
  constructor( private http:Http ) { }

  getArtistas( termino:string ){

    let headers = new Headers();
    headers.append('authorization',this.token );
    let query = `?q=${ termino }&type=artist`;
    let url= this.urlBusqueda + query;

    return this.http.get( url, { headers } )
                    .map( res => {
                     this.artistas = res.json().artists.items;
                     console.log(this.artistas);
                     return res.json().artists.items;
                    });
  }

  getArtista( id:string ){

    let headers = new Headers();
    headers.append('authorization',this.token );
    let query = `/${ id }`;
    let url= this.urlArtista + query;

    return this.http.get( url, { headers } )
                    .map( res => {
                      console.log( res.json() );
                      return  res.json();

                    });
  }

  getTop( id:string ){

    let headers = new Headers();
    headers.append('authorization', this.token );
    let query = `/${ id }/top-tracks?country=US`;
    let url= this.urlArtista + query;

    return this.http.get( url, { headers } )
                    .map( res => {
                      console.log( res.json().tracks );
                      return  res.json().tracks;

                    });
  }



}
