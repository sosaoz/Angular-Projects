import { Component, OnInit } from '@angular/core';
import { CargaImagenesService } from '../../services/carga-imagenes.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html'
})
export class FotosComponent implements OnInit {

  imagenes: Observable<any[]>;

  constructor( public _cis:CargaImagenesService ) {
      this.imagenes = this._cis.listaUltimasImagenes( 10 );
      console.log(this.imagenes);
   }

  ngOnInit() {
  }

}
