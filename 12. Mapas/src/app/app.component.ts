import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 19.211709;
  lng: number = -96.131702;
  zoom:number = 17;

  marcadorSel:any = null;

  constructor( public _ms:MapasService ){
    this._ms.cargarMarcadores();
  }

  clickMapa( evento ){

    let nuevoMarcador:Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: "Sin Titulo",
      draggable: true
    }

    this._ms.insertarMarcador( nuevoMarcador );
  }

  clickMarcador( marcador:Marcador, i:number){
    this.marcadorSel = marcador;
  }

  dragEndMarcador( marcador:Marcador, evento ){
    console.log(marcador, evento);
    let lat = evento.coords.lat;
    let lng = evento.coords.lng;

    marcador.lat = lat;
    marcador.lng = lng;

    this._ms.guardarMarcadores();

  }

}
