import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  constructor() { }

  usuario:Object ={
    nombre: null,
    apellido: null,
    email: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  paises =[{
    codigo: "CRI",
    nombre:"Costa Rica"
    },
    {
      codigo:"MEX",
      nombre:"Mexico"
    }]

    sexos:string[] = ["Hombre", "Mujer", "It's a tramp"]

  guardar( forma:NgForm ){

    console.log("ngForm", forma);
    console.log("Valor Forma", forma.value);
    console.log("Usuario", this.usuario);
  }

}
