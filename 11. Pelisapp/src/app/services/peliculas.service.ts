import { Injectable } from '@angular/core';


import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  public date:Date = new Date();//Gets Today's Date
  public year:String;
  public month:String;
  public day:String;

  private apikey:string = "5c1342974e65e6fe455fec099d0c4c7c";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( public jsonp:Jsonp,
               ) { }

  getPopulars(){
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=en&callback=JSONP_CALLBACK`

    return this.jsonp.get( url )
               .map( res =>  res.json().results);
  }

  getNew(){

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ this.lastDate() }&primary_release_date.lte=${ this.todayDate() }&api_key=${ this.apikey }&language=en&callback=JSONP_CALLBACK`

    return this.jsonp.get( url )
               .map( res =>  res.json().results);
  }

  getforKids(){
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=en&callback=JSONP_CALLBACK`

    return this.jsonp.get(url)
               .map( res => res.json().results);
  }

  searchMovie( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
               .map( res => res.json().results);
  }

  movieDetail( id:string ){

    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
               .map( res => res.json())
  }

  todayDate():string{

    this.year = this.date.getFullYear().toString();

    let month = this.date.getMonth() + 1; // Adds 1 to make it 1-12 months
    let date =  this.date.getDate();


    if( date < 10 ){
      this.day = "0" + date.toString();//Adds "0" if Date is less than 10
    }

    else{
      this.day = date.toString();
    }

    if( month < 10 ){
      this.month = "0" + month.toString();// Adds "0" if Month is less than 10
    }

    else{
      this.month = month.toString();
    }

    return this.year + "-" + this.month +"-"+ this.day

  }

  lastDate():string{
     //Gets the Date prior 21 days
    let oldD = new Date( this.date.getFullYear(),
                         this.date.getMonth(),
                         this.date.getDate() - 7 );// Subtracts 21 days from Today's Date

    this.year = oldD.getFullYear().toString();

    let month = oldD.getMonth() + 1; //Adds 1 to make it 1-12 months
    let date = oldD.getDate();

    if( date < 10 ){
      this.day = "0" + date.toString(); //Adds "0" if Date is less than 10
    }

    else{
      this.day = date.toString();
    }

    if( month < 10 ){
      this.month = "0" + month.toString(); // Adds "0" if Month is less than 10
    }

    else{
      this.month = month.toString();
    }

    return this.year + "-" + this.month +"-"+ this.day
  }


}
