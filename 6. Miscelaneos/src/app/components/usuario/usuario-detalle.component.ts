import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle Works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor( private router:ActivatedRoute ) {

    this.router.parent.params.subscribe( parametros => {
      console.log("Ruta HIJA");
      console.log(parametros);

    } )

  }

  ngOnInit() {
  }

}
