//Component Code
import { Component } from '@angular/core';

@Component({
  selector: 'app-body',//This is going to be the name of the template
  templateUrl: 'body.component.html'//To refer to archives you need to put TemplateURL
})

export class BodyComponent {

  mostrar:boolean = false;

  frase:any = {
    mensaje: "Un gran poder requiere una gran responsabilidad",
    autor: "Ben Parker"
  }

  personajes:string[] = ["Spiderman", "Venom", "Dr. Octopus"];

}
