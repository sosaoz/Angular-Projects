import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef ) {

    console.log("Directiva Llamada");

   }

   @Input("appResaltado") nuevoColor:string;

   @HostListener('mouseenter') mouseEntro(){
    this.resaltar (this.nuevoColor);
   }

   @HostListener('mouseleave') mouseSalio(){
     this.resaltar ( null );
   }

   private resaltar( color:string = "yellow"){
       this.el.nativeElement.style.backgroundColor = color;
   }



}
