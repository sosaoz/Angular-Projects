import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'videoyoutube'
})
export class VideoyoutubePipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){

  }

  transform(value: string): any {
    let url = "http://www.youtube.com/embed/";
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
